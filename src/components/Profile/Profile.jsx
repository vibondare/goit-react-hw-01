import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img src={image} alt="User avatar" className={css.image} />
        <p className={css.name}>{name}</p>
        <p className={css.username}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.statTitle}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statTitle}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statTitle}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
