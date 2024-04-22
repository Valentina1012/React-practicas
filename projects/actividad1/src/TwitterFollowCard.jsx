
export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing }) {
    //const imageSrc = 'https://unavatar.io/duckduckgo/${userName}'; //Puede usarse para el src de la imagen tomando el parámetro de userName 

    return (
        <article className="tw-followCard"> 
        <header className="tw-followCard-header">
            <img src= {'https://unavatar.io/google/${userName}'} alt="" className="tw-followCard-avatar"/>
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUserName">{format(userName)}</span>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}