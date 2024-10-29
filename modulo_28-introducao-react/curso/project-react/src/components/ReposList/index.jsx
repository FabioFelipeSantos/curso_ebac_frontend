/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Repos.module.css";

export default function ReposList({ userName }) {
	const [repos, setRepos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch(`https://api.github.com/users/${userName}/repos`)
			.then((resp) => resp.json())
			.then((data) => {
				setTimeout(() => {
					setIsLoading(false);
					setRepos(data);
				});
			}, 3000);
	}, [userName]);

	return (
		<div className={`${styles.containerList} container`}>
			<h1 className={styles.repoTitle}>My Repos!</h1>
			{isLoading ? (
				<h2>Loading Repos...</h2>
			) : (
				<ul className={styles.list}>
					{repos.map((repo, index) => (
						<li
							key={repo.id}
							className={styles.listItem}>
							<div className={styles.itemName}>
								<b>
									Repo {index + 1}: <em>{repo.name}</em>
								</b>
							</div>
							{repo.language && (
								<div className={styles.itemLanguage}>
									<b>
										Language: <em>{repo.language}</em>
									</b>
								</div>
							)}
							<a
								className={styles.itemLink}
								href={repo.html_url}
								target="_blank">
								Visit on GitHub
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
