import "../styles/Profile.css";

function Profile(){
    return(
        <div className="layout">
            <img src="../src/assets/John.jpg" alt="profile" />
            <h1 className="name">John Doe</h1>
            <hr></hr>
        </div>
    );
}

export default Profile;