import { Section, Aside } from '../../shared';

function HomeContainer() {
  return (
    <Section className={`h-[500vh] overflow-hidden w-[100%] bg-laurel`}>
      <Aside>
        <div className="text-white">Home</div>
      </Aside>
    </Section>
  );
}

export default HomeContainer;
