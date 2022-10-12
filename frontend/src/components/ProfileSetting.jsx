import logo from "../assets/images/header-logo-spirit.d947df93bc055849898e.gif";
import {user} from "../App";
import Profile from "./Card/Profile";


const ProfileSetting=()=>{
    return (
        <div>
            <div
                className="z-30 flex fixed w-full max-h-[44px]  justify-between items-center bg-[#026AA7] py-[6px] px-[20px]  select-none">
                <div
                    onClick={() => window.location.pathname = "/"}
                    title="Trello"
                    className="flex justify-center items-center py-2 w-[80px]">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="relative flex justify-center items-center py-2 w-[35px]">
                    <img
                        title={user.username}
                        onClick={() => setProfile(true)}
                        src={user.image} alt="profile picture"/>
                    {profile && <Profile setProfile={setProfile}/>}
                </div>
            </div>
        </div>
    );
}

export default ProfileSetting;
