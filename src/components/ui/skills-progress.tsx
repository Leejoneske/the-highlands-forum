import { Progress } from './progress';

interface Skill {
  name: string;
  level: number;
}

interface SkillsProgressProps {
  skills: Skill[];
  className?: string;
}

const SkillsProgress = ({ skills, className = '' }: SkillsProgressProps) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {skills.map((skill, index) => (
        <div 
          key={skill.name} 
          className="animate-on-scroll"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-900">{skill.name}</span>
            <span className="text-sm text-gray-600">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;