




import { Link2, GitHub } from 'react-feather'
import cn from 'classnames'
import Image from 'next/image'

import styles from './index.module.scss'
import { Project as ProjectProps } from '../../types'
import { motion } from 'framer-motion'
import { fadeInFromRight } from '../../constants/animations'
import Link from 'next/link'

const Project = ({ title, description, slug, image, link, linkText, small, priority, github, date }: ProjectProps): JSX.Element => {
  const animation = fadeInFromRight({ transition: { duration: 2 } });

  return (
    <motion.div className={styles.project} key={title} >
      <Link as={`/project/${slug}`} href="/project/[slug]" target="_blank" rel="noreferrer" aria-label={title}>
        <div className={cn(styles.background, small && styles.backgroundSmall)}>
          {image && (
            <div className={styles.imageWrapper}>
              <div className={styles.image}>
                <Image src={image} priority={priority} layout="fill" sizes="(max-width: 700px) 90vw, 700px" />
              </div>
            </div>
          )}
        </div>
      </Link>

      <motion.h3 {...animation} className={styles.title}>{title}</motion.h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        {link && (
          <a href={`https://${link}`} className={styles.link}>
            {linkText || `Visit ${link}`}
            <Link2 />
          </a>
        )}
        {github && (
          <>
            <span className={styles.dividerDot}>·</span>
            <a href={`https://${github}`} className={styles.link}>
              View source
              <GitHub />
            </a>
          </>
        )}
      </div>
    </motion.div>
  )
}

export default Project