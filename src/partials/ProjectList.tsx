import { GradientText } from '@/components/GradientText/GradientText';
import { Project } from '@/components/Project/Project';
import { Section } from '@/components/Section/Section';
import { ColorTags, Tags } from '@/components/Tags/Tags';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="VEYM.net Website"
        description="Official Website of the Vietnamese Eucharistic Youth Movement in the USA"
        link="https://veym.net"
        img={{
          src: 'https://veym.net/tnttlogo-1.png',
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
      />
      <Project
        name="VEYM Members Portal"
        description="Membership Management System for VEYM"
        link="https://members.veym.net"
        img={{
          src: 'https://members.veym.net/membersPortal.png',
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
          src: 'https://docs-helper.veym.app/robotbook3.png',
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
      />
      <Project
        name="VEYM Business Directory"
        description="Directory of businesses owned by VEYM members"
        link="https://biz.veym.net"
        img={{
          src: 'https://biz.veym.net/biz-logo.png',
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
          src: 'https://ht-hero.veym.app/logo.png',
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
      />
      <Project
        name="Quiz Aide"
        description="Generate quiz questions and export to Kahoot"
        link="https://quizaide.leeto.dev"
        img={{
          src: 'https://quizaide.leeto.dev/robotbook2.png',
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
      />
      <Project
        name="VEYM URL Shortener"
        description="Create and manage shortened URLs"
        link="https://url.veym.net"
        img={{
          src: 'https://url.veym.net/urlshortener.png',
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
      />
      <Project
        name="Virtual HTDT"
        description="Virtual HTDT for Don Bosco Virtual Camp 2021"
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
      />
    </div>
  </Section>
);

export { ProjectList };
