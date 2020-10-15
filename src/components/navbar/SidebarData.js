import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    // icon: <AiIcons.AiFillHome />,
    icon: <FcIcons.FcHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    // icon: <IoIcons.IoIosPaper />,
    icon: <FcIcons.FcDataSheet />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    // icon: <FaIcons.FaCartPlus />,
    icon: <FcIcons.FcShipped />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    // icon: <IoIcons.IoMdPeople />,
    icon: <FcIcons.FcConferenceCall />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    // icon: <FaIcons.FaEnvelopeOpenText />,
    icon: <FcIcons.FcSms />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    // icon: <IoIcons.IoMdHelpCircle />,
    icon: <FcIcons.FcAssistant />,
    cName: 'nav-text'
  }
];
