import { GradientText } from '@/components/GradientText/GradientText';
import { HeroAvatar } from '@/components/HeroAvatar/HeroAvatar';
import { Section } from '@/components/Section/Section';

import avatarImage from '../../public/assets/images/avatar1.png';

const Hero = () => (
  <Section>
    <div className="mt-16">
      <HeroAvatar
        title={
          <>
            Hello, I'm <GradientText>Leeto</GradientText>
          </>
        }
        description={
          <>
            Software Engineer at New Relic, and Development Lead for the{' '}
            <a
              href="https://itapps.veym.net"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              VEYM IT Team
            </a>
            .
          </>
        }
        avatar={
          <img
            className="h-80 w-80"
            src={avatarImage}
            alt="Avatar image"
            loading="lazy"
          />
        }
        socialButtons={
          <>
            {/* <a href="/">
              <HeroSocial
                src="/assets/images/twitter-icon.png"
                alt="Twitter icon"
              />
            </a>
            <a href="/">
              <HeroSocial
                src="/assets/images/facebook-icon.png"
                alt="Facebook icon"
              />
            </a>
            <a href="/">
              <HeroSocial
                src="/assets/images/linkedin-icon.png"
                alt="Linkedin icon"
              />
            </a>
            <a href="/">
              <HeroSocial
                src="/assets/images/youtube-icon.png"
                alt="Youtube icon"
              />
            </a> */}
          </>
        }
      />
    </div>
  </Section>
);

export { Hero };
