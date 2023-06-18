import React from 'react';
import './profilePage.css';

interface ProfilePageProps {
    userImg: string;
    username: string;
	nickname: string;
	email: string;
}

export const ProfilePage = ({userImg, username, nickname, email}: ProfilePageProps) => {

    return (
        
        <div className='ProfilePageContainer'>
            <div className='profileBox'>
                <div className='profileHeader'>
                    <img className='avatarImage' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                    <div className='nickNameDiv'>
                        <h1 className='nickNameH1'>$HEKTOR$</h1>
                        <p>No information given.</p>
                    </div>
                        <div className='profileHeaderInfo'>
                            Level
                            <div className='levelIcon'>
                                <span className='levelNumber'>7</span>
                            </div>
                        </div>
                            {/* <div className='pHInstructionsContainer'>
                                <div className='profileHeaderInstructions'>You can feature one of your Badges here. Select one from your edit profile page.</div>
                            </div> */}
                    </div>
                            <div className='editProfileBtnContainer'>
                                <button className='editProfileBtn'>Edit Prolife</button>
                            </div>
                    <div className='profileLeftCol'>
                            <h2>Recent Activity</h2>
                    </div>
                    <div className='recentGameContectCard'>
                        <div className='recentGameContectContainer'>
                                <img className='imgGameCapsule' src="https://cdn.akamai.steamstatic.com/steam/apps/578080/capsule_184x69.jpg?t=1684838697" alt="image game capsule" />
                                <a className='pupgGameLink' href="https://steamcommunity.com/app/578080">PUBG: BATTLEGROUNDS</a>
                                <div className='gameInfoDetailsContainer'>
                                    <p className='gameInfoDetails'>1,217 hrs on record last played on 27 May</p>
                                </div>
                                <div className='gameInfoStats'>
                                </div>
                        </div>
                            <div className='gameInfoAchievementsSummaryArea'>
                                <div className='game_info_achievements_summary_area'>
                                    <a className='AchievementProgressLink' href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">Achievement Progress</a>
                                    <span className="ellipsis">34 of 37</span>
                                    <div className='achievement_progress_bar_ctn'>
                                        <div className='progress_bar'></div>
                                        <div className='achievement_icons_container'>
                                            <div className='achievement_icons'>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/578080/09952c438a2be5f2f41952e3a8a34f846f90d770.jpg"></img>
                                                    </a>
                                                </div>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/578080/9f1d67a040fcab3b271ed06371f90031a8358306.jpg"></img>
                                                    </a>
                                                </div>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/578080/3de43fb81469b825321fd0e38ece099da31f546e.jpg"></img>
                                                    </a>
                                                </div>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/578080/b59ec29b8f6861220a6a007d216a825e28403f04.jpg"></img>
                                                    </a>
                                                </div>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/578080/59abda8f6cfe24cb94398ce496a1aab1248a3f61.jpg"></img>
                                                    </a>
                                                </div>
                                        </div>
                                           <div className='game_info_achievement_plus_more'> +29 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <br />
                    <div className='recentGameContectCard'>
                        <div className='recentGameContectContainer'>
                                <img className='imgGameCapsule' src="https://cdn.akamai.steamstatic.com/steam/apps/240/capsule_184x69.jpg?t=1666823740" alt="image game capsule" />
                                <a className='pupgGameLink' href="https://steamcommunity.com/app/578080">Counter-Strike: Source</a>
                                <div className='gameInfoDetailsContainer'>
                                    <p className='gameInfoDetails'>584 hrs on record last played on 2 May</p>
                                </div>
                                <div className='gameInfoStats'>
                                </div>
                        </div>
                            <div className='gameInfoAchievementsSummaryArea'>
                                <div className='game_info_achievements_summary_area'>
                                    <a className='AchievementProgressLink' href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">Achievement Progress</a>
                                    <span className="ellipsis">93 of 147</span>
                                    <div className='achievement_progress_bar_ctn'>
                                        <div className='progress_bar2'></div>
                                        <div className='achievement_icons_container'>
                                            <div className='achievement_icons'>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/240/c28b855319e0313ed5d72e3814be3877fe6d8701.jpg"></img>
                                                    </a>
                                                </div>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/240/c7d5f568f036be6832028e3d679650743ea4cceb.jpg"></img>
                                                    </a>
                                                </div>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/240/baaec1b4ba2a388c29eb10f932f0a029ccf41473.jpg"></img>
                                                    </a>
                                                </div>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/240/95437097875b1388f9158e7ebe47b2eb1ab86f99.jpg"></img>
                                                    </a>
                                                </div>
                                                <div className='game_info_achievement'>
                                                    <a href="https://steamcommunity.com/profiles/76561198087098751/stats/578080/achievements/">
                                                    <img className='imgIcon' src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/240/2d6b9c05b9cbfe6c5c778e6a862f2ff320b8a467.jpg"></img>
                                                    </a>
                                                </div>
                                        </div>
                                           <div className='game_info_achievement_plus_more'> +88 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    )
}