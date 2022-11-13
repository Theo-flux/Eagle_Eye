import { Section, Aside } from '../../shared';

function VoteContainer() {
  return (
    <Section className={`h-screen overflow-hidden w-[100%] bg-gray`}>
      <Aside>
        <div className="text-white">Vote</div>
      </Aside>
    </Section>
  );
}

export default VoteContainer;
