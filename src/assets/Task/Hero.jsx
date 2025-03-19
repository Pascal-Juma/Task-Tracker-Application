import Input from "./Input";
import useStore from "../store/Store";
import now from "../utils/Now";

const Hero = () => {
  const tasks = useStore((state) => state.tasks);
  let incomplete = 0;
  tasks.forEach((currentTask) => {
    if (currentTask.completed === false) incomplete += 1;
  });
  return (
    <section className="hero">
      <h3>Good {now()} Pascal</h3>
      <h2>You have {incomplete} tasks left today</h2>
      <Input />
    </section>
  );
};
export default Hero;
