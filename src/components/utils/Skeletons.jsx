import { Skeleton } from "@mantine/core";

const Skeletons = ({ n }) => {
    return (
        <div>
            {Array.apply(0, Array(n)).map((x, i) => (
                <Skeleton height={14} my={3} radius="xl" key={i} />
            ))}
        </div>
    );
};

export default Skeletons;