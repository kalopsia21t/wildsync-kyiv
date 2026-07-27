import styles from '@styles/mixes.module.css';

const fallbackMixes = [
  {
    id: 1,
    tag: "Останній реліз",
    title: "Maze of Death (b2b DJ Siedin)",
    created_at: "2026-07-09",
    permalink_url: "https%3A//soundcloud.com/wildsync/maze-of-death-b2b-dj-siedin"
  },
  {
    id: 2,
    tag: "Архів",
    title: "DJ Siedin (Mezzanine)",
    created_at: "2026-05-21",
    permalink_url: "https%3A//soundcloud.com/wildsync/dj-siedin-wildsync-15-02-25"
  }
];

interface SoundCloudTrack {
  id: number;
  title: string;
  permalink_url: string;
  created_at: string;
}

async function getMixes(): Promise<SoundCloudTrack[]> {
  const API_URL = "https://api-v2.soundcloud.com/users/1591940346/tracks?representation=&client_id=pKk38t8ErXEMPwcTI3sjY3kmQ3nyfbRl&limit=20&offset=0&linked_partitioning=1";

  try {
    const res = await fetch(API_URL, {
      // Re-check cache every 1 hour
      next: { revalidate: 3600 } 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch tracks: ${res.status}`);
    }

    const data = await res.json();
    return data.collection || [];
  } catch (error) {
    console.error("SoundCloud Fetch Error:", error);
    return fallbackMixes;
  }
}

export default async function MixesPage() {
  const tracks = await getMixes();

  return (
    <div className={styles.mixesContainer}>
      {tracks.map((track, index) => {

        const rawDateString = track.created_at;
        const dateObj = new Date(rawDateString);

        const formattedDate = dateObj.toLocaleDateString('uk-UA', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });

        const tag = index === 0 ? "Останній реліз" : "Мікс / Сет";
        const encodedTrackUrl = encodeURIComponent(track.permalink_url);

        return (
          <div key={track.id} className={styles.mixCard}>
            <div className={styles.mixHeader}>
              <span className={styles.mixDate}>{tag} — {formattedDate}</span>
              <h3 className={styles.mixTitle}>{track.title}</h3>
            </div>
            <div className={styles.playerWrapper}>
              <iframe 
                width="100%"
                height="120"
                src={`https://w.soundcloud.com/player/?url=${encodedTrackUrl}&color=%23111111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}