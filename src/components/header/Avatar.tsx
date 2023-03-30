import Image from "next/image"
import avatarImg from "@/image/image-avatar.png"
import styles from "@/styles/component/header/Avatar.module.css"

const Avatar: React.FC = () => {
  return (
    <div className={styles.container} >
      <Image
        className={styles.avatar}
        src={avatarImg}
        alt="profile icon"
      />
    </div>
  )
}

export default Avatar