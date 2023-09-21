import { useRouter } from "next/router"
import { ArrowLeft } from 'react-feather'
import Button from "../Button";
import styles from './index.module.css';

const BackButton = () => {
  const router = useRouter()
  return (
    <div className={styles.spacer}>
      <Button onClick={() => router.back()} variant="transparent">
        <>
          <ArrowLeft />
          <span className={styles.link}>Go to the previous page</span>
        </>
      </Button>
    </div>
  )
}

export default BackButton;