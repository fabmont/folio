import React from 'react';
import styled from 'styled-components';
import { ReactLogo } from '@styled-icons/boxicons-logos';
import { Smartphone } from '@styled-icons/remix-line';
import { Computer } from '@styled-icons/material-outlined';
import cbcImg from '../images/cbc.jpg';

const LogoReact = styled(ReactLogo).attrs({ title: 'ReactJS' })`
  color: #2ac7e3;
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const LogoReactNative = styled(ReactLogo).attrs({ title: 'React Native' })`
  color: #5767f9;
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const PhoneIcon = styled(Smartphone).attrs({ title: 'Mobile' })`
  color: ${({ theme }) => theme.textColor};
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const ComputerIcon = styled(Computer).attrs({ title: 'Web' })`
  color: ${({ theme }) => theme.textColor};
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export default [
  {
    key: 'ocb',
    name: '14th CBC',
    description: '14th Brasilian Cooperativism Congress',
    path: '/projects/ocb',
    techs: [
      <LogoReact />,
      <LogoReactNative />,
      <PhoneIcon />,
      <ComputerIcon />,
    ],
    thumb: cbcImg,
  },
];
