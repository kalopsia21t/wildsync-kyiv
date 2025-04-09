"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import styles from "@styles/post.module.css";

import { postMocks } from "../../../utils/postMocks";

export default function PostPage() {
  const { postId } = useParams();

  const post = postMocks.find((item) => item.postId === postId);

  if (!post) {
    return null;
  }

  return (
    <div className={styles.post}>
      <div className={styles.postImgContainer}>
        <Image
          className={styles.postImg}
          src={post.img}
          alt="Wildsync 15/02"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.postInfo}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <div className={styles.postDesc}>{post.description}</div>
        <a className={styles.postAction} href={post.actionSrc}>
          {post.action}
        </a>
      </div>
    </div>
  );
}
