import { GradientText } from '@/components/GradientText/GradientText';
import { Project } from '@/components/Project/Project';
import { Section } from '@/components/Section/Section';
import { ColorTags, Tags } from '@/components/Tags/Tags';

import logoDocsHelper from '../../public/assets/images/projectIcons/docsHelper.png';
import logoHtHero from '../../public/assets/images/projectIcons/htHero.png';
import logoMembersPortal from '../../public/assets/images/projectIcons/membersPortal.png';
import logoQuizAide from '../../public/assets/images/projectIcons/quizaide.png';
import logoUrlShortener from '../../public/assets/images/projectIcons/urlshortener.png';
import logoVeym from '../../public/assets/images/projectIcons/veym.png';
import logoVeymBiz from '../../public/assets/images/projectIcons/veymBiz.png';
import screenshotDbld from '../../public/assets/images/projects/dbliondance/screenshot-dbld1.png';
import screenshotDbsafe from '../../public/assets/images/projects/dbsafe/screenshot-dbsafe1.png';
import screenshotHiepsi2 from '../../public/assets/images/projects/hiepsi2/screenshot-hiepsi2-1.png';
import screenshotHiepsi3 from '../../public/assets/images/projects/hiepsi3/screenshot-hiepsi3.png';
import screenshotBoardGames from '../../public/assets/images/projects/leetogames/screenshot-leetogames.png';
import screenshotPPLouisville from '../../public/assets/images/projects/phophilouisville/screenshot-phophilouisville.png';
import screenshotVdh7 from '../../public/assets/images/projects/vdh7/screenshot-vdh7.png';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <p className="mb-4">
        Arbitrarily ordered by a combination of significance and date created
      </p>
      <Project
        name="VEYM.net Website"
        description="Official Website of the Vietnamese Eucharistic Youth Movement in the USA"
        link="https://veym.net"
        img={{
          src: logoVeym,
          alt: 'VEYM.net',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>ChakraUI</Tags>
            <Tags color={ColorTags.INDIGO}>Directus</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
        pageLink="veym-net"
      />
      <Project
        name="VEYM Members Portal"
        description="Membership Management System for VEYM"
        link="https://members.veym.net"
        img={{
          src: logoMembersPortal,
          alt: 'Members Portal',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>ChakraUI</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="VEYM Docs Helper"
        description="AI Assistant that can answer questions about VEYM documents"
        link="https://docs-helper.veym.app"
        img={{
          src: logoDocsHelper,
          alt: 'Docs Helper',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>ChakraUI</Tags>
            <Tags color={ColorTags.AMBER}>AI</Tags>
            <Tags color={ColorTags.VIOLET}>tRPC</Tags>
            <Tags color={ColorTags.CYAN}>Prisma</Tags>
            <Tags color={ColorTags.LIME}>Next Auth</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
        pageLink="docs-helper"
      />
      <Project
        name="VEYM Business Directory"
        description="Directory of businesses owned by VEYM members"
        link="https://biz.veym.net"
        img={{
          src: logoVeymBiz,
          alt: 'VEYM Biz',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.SKY}>Mantine UI</Tags>
            <Tags color={ColorTags.VIOLET}>tRPC</Tags>
            <Tags color={ColorTags.LIME}>Next Auth</Tags>
            <Tags color={ColorTags.INDIGO}>Directus</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="HT Hero"
        description="Generate ideas for VEYM activities"
        link="https://ht-hero.veym.app"
        img={{
          src: logoHtHero,
          alt: 'HT Hero',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.SKY}>Tailwind CSS</Tags>
            <Tags color={ColorTags.AMBER}>AI</Tags>
            <Tags color={ColorTags.VIOLET}>tRPC</Tags>
            <Tags color={ColorTags.CYAN}>Prisma</Tags>
            <Tags color={ColorTags.LIME}>Next Auth</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
        pageLink="ht-hero"
      />
      <Project
        name="Quiz Aide"
        description="Generate quiz questions and export to Kahoot"
        link="https://quizaide.leeto.dev"
        img={{
          src: logoQuizAide,
          alt: 'Quiz Aide',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.SKY}>Tailwind CSS</Tags>
            <Tags color={ColorTags.ZINC}>shadcn UI</Tags>
            <Tags color={ColorTags.AMBER}>AI</Tags>
            <Tags color={ColorTags.VIOLET}>tRPC</Tags>
            <Tags color={ColorTags.LIME}>Next Auth</Tags>
            <Tags color={ColorTags.CYAN}>Prisma</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
        pageLink="quiz-aide"
      />
      <Project
        name="VEYM URL Shortener"
        description="Create and manage shortened URLs"
        link="https://url.veym.net"
        img={{
          src: logoUrlShortener,
          alt: 'URL Shortener',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>ChakraUI</Tags>
            <Tags color={ColorTags.INDIGO}>Directus</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Hiep Si v3"
        description="Hiep Si Announcements, Resources, Points, and BHT"
        link="https://hiepsi.donbosco.cc"
        img={{
          src: screenshotHiepsi3,
          alt: 'Hiep Si',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>ChakraUI</Tags>
            <Tags color={ColorTags.VIOLET}>Strapi</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
        pageLink="hiepsi3"
      />
      <Project
        name="Wedding Website"
        description="My wedding website"
        link="https://dknlovestory.com"
        img={{
          src: 'https://dknlovestory.com/static/0932577df842d9f6110be04df953a163/5267c/11-walking.jpg',
          alt: 'dknlovestory',
        }}
        category={
          <>
            <Tags color={ColorTags.PURPLE}>Gatsby</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        pageLink="wedding-website"
      />
      <Project
        name="Virtual HTDT"
        description="Virtual interactive journey for Doan Don Bosco Virtual Camp 2021"
        link="https://virtualhtdt.donbosco.cc"
        img={{
          src: 'https://virtualhtdt.donbosco.cc/saigon/benthanh.jpg',
          alt: 'Virtual HTDT',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>ChakraUI</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        pageLink="virtual-htdt"
      />
      <Project
        name="Board Game Library"
        description="Catalog of my board game collection, with check-in/check-out system"
        link="https://leeto.games"
        img={{
          src: screenshotBoardGames,
          alt: 'leeto.games',
        }}
        category={
          <>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>ChakraUI</Tags>
            <Tags color={ColorTags.ORANGE}>Firebase</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        pageLink="leeto-games"
      />
      <Project
        name="DB COVID Screening"
        description="COVID screening form for 2020-2021 school year"
        link="https://checkin.donbosco.cc"
        img={{
          src: screenshotDbsafe,
          alt: 'dbsafe',
        }}
        category={
          <>
            <Tags color={ColorTags.PURPLE}>Gatsby</Tags>
            <Tags color={ColorTags.SKY}>Tailwind CSS</Tags>
            <Tags color={ColorTags.GREEN}>Google Sheets</Tags>
            <Tags color={ColorTags.ORANGE}>Firebase</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        pageLink="dbsafe"
      />
      <Project
        name="Pho Phi Louisville"
        description="Website for Pho Phi Restaurant in Louisville, KY"
        link="https://phophi.net"
        img={{
          src: screenshotPPLouisville,
          alt: 'pho phi',
        }}
        category={
          <>
            <Tags color={ColorTags.PURPLE}>Gatsby</Tags>
            <Tags color={ColorTags.SKY}>Tailwind CSS</Tags>
            <Tags color={ColorTags.LIME}>Netlify CMS</Tags>
            <Tags color={ColorTags.ORANGE}>Firebase Functions</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        pageLink="phophilouisville"
      />
      <Project
        name="DB Lion Dance"
        description="Website for the Don Bosco Lion Dance Team"
        link="https://dbliondance.com"
        img={{
          src: screenshotDbld,
          alt: 'dbld',
        }}
        category={
          <>
            <Tags color={ColorTags.PURPLE}>Gatsby</Tags>
            <Tags color={ColorTags.LIME}>Netlify CMS</Tags>
            <Tags color={ColorTags.ORANGE}>Firebase Functions</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        pageLink="dbld"
      />
      <Project
        name="VDH7"
        description="Informational website for Đại Hội Về Đất Hứa 7 which unfortunately was cancelled due to COVID-19"
        link="https://vdh7.veym.net"
        img={{
          src: screenshotVdh7,
          alt: 'vdh7',
        }}
        category={
          <>
            <Tags color={ColorTags.PURPLE}>Gatsby</Tags>
            <Tags color={ColorTags.LIME}>Netlify CMS</Tags>
            <Tags color={ColorTags.ORANGE}>Firebase Functions</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        pageLink="vdh7"
      />
      <Project
        name="Hiep Si v2"
        description="Hiep Si Announcements, Resources, Points, and BHT"
        link="https://v2.hiepsi.donbosco.cc"
        img={{
          src: screenshotHiepsi2,
          alt: 'vdh7',
        }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>Create React App</Tags>
            <Tags color={ColorTags.VIOLET}>Bootstrap</Tags>
            <Tags color={ColorTags.ORANGE}>Firebase</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        pageLink="vdh7"
      />
    </div>
  </Section>
);

export { ProjectList };
