import Tooltip from '../components/Tooltip';

function Profile() {
    return (
        <>
            <span>asdasd</span>
            <button style={{margin: 0}}>PEPE2</button>

            <Tooltip message='Tooltip de ejemplo' color="red" fontColor="blue">
                <button style={{margin: 0}}>PEPE</button>
            </Tooltip>
            <button style={{margin: 0}}>PEPE3</button>

        </>
    )
}

export default Profile;