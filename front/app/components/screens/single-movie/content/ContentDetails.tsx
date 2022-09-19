import Link from 'next/link'
import { FC, Fragment } from 'react'
import { IContentList } from './content.interface'

import styles from './Content.module.scss'

const ContentDetails: FC<IContentList> = ({ name, links }) => {
	return (
		<div className={styles.detailsList}>
			<div className={styles.name}>{name}:</div>
			<div className={styles.links}>
				{links.map((link, i) => (
					<Fragment key={i}>
						<Link href={link.link}>
							<a>{link.title}</a>
						</Link>
						{i + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentDetails
