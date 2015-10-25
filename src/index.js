import { Topics, Topic } from 'http';

export default function() {
  return true;
}

function run() {
  let topics = new Topics();
  let topic = new Topic();

  topics.get().then(topics => {
    console.log(topics);
  });

  topic.get('1751295897__Berlin').then(topic => {
    console.log(topic);
  });
}

run()
