
export const showCloud = (e, nextActorQuery = '', query = '') => {
    const cloud = e.target.querySelector('.js-cloud');

    if (cloud !== null) {
        if (nextActorQuery !== '') {
            cloud.addEventListener('transitionend', () => {
                document.querySelector(nextActorQuery).style.transform = 'none';
            })
        } else {
            if (query !== '') {
                cloud.addEventListener('transitionend', () => {
                    document.querySelector(query).style.opacity = 1;
                })
            }
        }
        cloud.style.opacity = 1;
    }
}
