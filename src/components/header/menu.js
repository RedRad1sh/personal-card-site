import React from "react";
import { Link } from 'react-router-dom';
import {
    MenuItem, Menu, Icon, SidebarPusher,
    SidebarPushable,
    Header,
    Image,
    Segment,
    Sidebar,
    Button,
    Checkbox
} from 'semantic-ui-react'

import './menu.less';

const menuItems = [
    <MenuItem link href="/" className="menuitem primary">
        <span><Icon name='home' /> index</span>
    </MenuItem>,
    <MenuItem link href="/skill-tree" className="menuitem primary">
        <span><Icon name='tree' /> skill-tree</span>
    </MenuItem>,
    <MenuItem link href="/music" className="menuitem primary">
        <span><Icon name='music' /> music</span>
    </MenuItem>,
    // <MenuItem link href="/askme" className="menuitem primary">
    //     <span><Icon name='question'/> askme</span>
    // </MenuItem>
]

const MenuElement = () => {
    const [visible, setVisible] = React.useState(false)

    return (<div className="menu">
        <Button className="menu-button" onClick={(e, data) => setVisible(!visible)}>
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        </Button>
        <Menu className="menulist" inverted secondary stackable>
            {menuItems}
        </Menu>
        <SidebarPushable as={Segment} className={visible ? 'pushed' : ''}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='chevron circle down'
                inverted secondary stackable
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='thin'
            >
                {menuItems}
            </Sidebar>

            <SidebarPusher dimmed={visible}>
            </SidebarPusher>
        </SidebarPushable>
        <div className="socials">
                <a href="https://github.com/RedRad1sh"><svg className="socials-icon" preserveAspectRatio='none' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M15.1345 0.0224166C6.77254 0.0224166 0.0224199 6.82104 0.0224199 15.2432C0.0224199 21.991 4.3546 27.6734 10.349 29.6776C11.1046 29.8044 11.3816 29.3479 11.4068 28.9673C11.4068 28.6122 11.3816 27.3945 11.3816 26.1261C7.57847 26.8364 6.59618 25.1875 6.29394 24.3249C6.11758 23.8936 5.38721 22.5239 4.73241 22.194C4.20348 21.9148 3.44788 21.2046 4.73241 21.1792C5.91614 21.1538 6.77254 22.27 7.04954 22.752C8.40963 25.0606 10.5756 24.4009 11.4573 23.995C11.5832 23.0056 11.9862 22.3461 12.4143 21.9656C9.06444 21.5851 5.53834 20.266 5.53834 14.4313C5.53834 12.7825 6.11758 11.4125 7.09987 10.3471C6.94875 9.96662 6.41982 8.39375 7.25099 6.31358C7.25099 6.31358 8.51028 5.90767 11.4068 7.88644C12.6158 7.5567 13.9003 7.37913 15.1848 7.35374C16.4694 7.35374 17.7539 7.53131 18.9629 7.88644C21.8594 5.90767 23.1187 6.31358 23.1187 6.31358C23.9499 8.41914 23.4209 9.96662 23.2446 10.3471C24.2018 11.4127 24.8063 12.7572 24.8063 14.4315C24.8063 20.2661 21.2802 21.5599 17.905 21.9658C18.4592 22.4477 18.9376 23.3611 18.9376 24.7816C18.9376 26.811 18.9124 28.46 18.9124 28.9673C18.9124 29.3732 19.1894 29.8298 19.945 29.6776C26.0967 27.5888 30.241 21.7817 30.2465 15.2432C30.2466 6.82104 23.4965 0.0224166 15.1345 0.0224166Z'
                        fill='white'
                    />
                </svg></a>
                <a href="mailto:redradishk@gmail.com"><svg className="socials-icon" preserveAspectRatio='none' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M14.1345 28.1887C6.38503 28.1887 0.0802679 21.884 0.0802679 14.1345C0.0802679 6.38502 6.38503 0.0802631 14.1345 0.0802631C17.4132 0.0802631 20.3894 1.17559 22.9804 3.33571C23.4109 3.69477 23.676 4.19997 23.7266 4.75821C23.7772 5.3166 23.6074 5.86124 23.2482 6.29193C22.8484 6.77144 22.2607 7.04663 21.6357 7.04663C21.1459 7.04663 20.6687 6.87375 20.2922 6.55972C18.4764 5.04564 16.4045 4.27795 14.1345 4.27795C8.6996 4.27795 4.27795 8.69959 4.27795 14.1345C4.27795 19.5694 8.6996 23.9911 14.1345 23.9911C18.7094 23.9911 22.7851 20.6811 23.765 16.2333H16.5456C15.3884 16.2333 14.4467 15.2916 14.4467 14.1343C14.4467 12.9771 15.3884 12.0354 16.5456 12.0354H26.09C27.2473 12.0354 28.1889 12.9771 28.1889 14.1343C28.1888 21.884 21.884 28.1887 14.1345 28.1887Z'
                        fill='white'
                    />
                </svg></a>
                <a href="https://soundcloud.com/greyhearty/tracks"><svg className="socials-icon" preserveAspectRatio="none" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4679 21.6693C9.84199 21.6693 9.33453 21.1618 9.33453 20.5359V1.49465C9.33453 0.868708 9.84199 0.361245 10.4679 0.361245C11.0939 0.361245 11.6013 0.868708 11.6013 1.49465V20.5359C11.6013 21.1618 11.0939 21.6693 10.4679 21.6693ZM5.9343 21.6693C5.30836 21.6693 4.8009 21.1618 4.8009 20.5359V5.12155C4.8009 4.49561 5.30836 3.98814 5.9343 3.98814C6.56025 3.98814 7.06771 4.49561 7.06771 5.12155V20.5359C7.06771 21.1618 6.56025 21.6693 5.9343 21.6693ZM1.40067 21.6693C0.774732 21.6693 0.267268 21.1618 0.267268 20.5359V8.0684C0.267268 7.44246 0.774732 6.935 1.40067 6.935C2.02662 6.935 2.53408 7.44246 2.53408 8.0684V20.5359C2.53408 21.1618 2.02662 21.6693 1.40067 21.6693Z" fill="white"></path><path d="M31.5564 12.5103C30.8898 10.7914 29.5226 9.42653 27.8051 8.76522L27.7995 8.76295C26.9947 8.45799 26.8239 8.43925 25.7295 8.38485L25.6925 8.38304C25.0999 8.35538 24.7634 8.37064 24.3816 8.44651C23.3986 4.26394 20.3401 1.19211 16.2067 0.323011C15.8805 0.255913 15.5046 0.205439 15.0894 0.17325C14.7746 0.149071 14.4637 0.256972 14.2318 0.471261C13.9999 0.685701 13.8682 0.987338 13.8682 1.30318V20.5357C13.8682 21.1617 14.3756 21.6691 15.0016 21.6691H26.7041C26.8171 21.6691 26.9294 21.6522 27.0373 21.6189L27.5783 21.4524C27.5984 21.4462 27.6182 21.4396 27.638 21.4323C29.1693 20.8662 30.404 19.653 31.3058 17.83C32.1338 16.1733 32.2251 14.2343 31.5564 12.5103Z" fill="white"></path>
                </svg></a>
            </div>
    </div >
    )
}

export default MenuElement