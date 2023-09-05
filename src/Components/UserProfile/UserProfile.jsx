import classes from './UserProfile.module.css'
const UserProfile = () => {
    return (
        <div className={classes.userProfile}>
            <div className={classes.wrapper}>
                ПРОФИЛЬ
                TODO: здесь будет фотка, имя(ник), список его проектов, создание нового, тоже попап
            </div>
        </div>
    )
}

export {UserProfile}