import React from 'react';
import { UserCard } from '@/features/user/model/userSlice';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/assets/svg';
import {
  SocialContainer,
  FacebookIcon as FacebookIconStyled,
  InstagramIcon as InstagramIconStyled,
  LinkedInIcon as LinkedInIconStyled,
  TwitterIcon as TwitterIconStyled,
} from '@/features/user/styles';

interface SocialMediaIconsProps {
  socialMedia: UserCard['socialMedia'];
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ socialMedia }) => {
  return (
    <SocialContainer>
      {socialMedia.facebook && (
        <FacebookIconStyled
          href={socialMedia.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </FacebookIconStyled>
      )}
      {socialMedia.instagram && (
        <InstagramIconStyled
          href={socialMedia.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </InstagramIconStyled>
      )}
      {socialMedia.linkedin && (
        <LinkedInIconStyled
          href={socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </LinkedInIconStyled>
      )}
      {socialMedia.twitter && (
        <TwitterIconStyled
          href={socialMedia.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </TwitterIconStyled>
      )}
    </SocialContainer>
  );
};

export default SocialMediaIcons;
