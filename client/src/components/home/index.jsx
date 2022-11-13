import { Section, Aside } from '../../shared';

function HomeContainer() {
  return (
    <Section className={`h-screen overflow-hidden w-[100%] bg-white`}>
      <Aside>
        <div className="text-white">Home</div>
      </Aside>
    </Section>
  );
}

export default HomeContainer;
