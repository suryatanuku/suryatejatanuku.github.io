import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import skillsData from "../../schema/skillsData.json";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export function Skills() {
  type SkillCategory = "Frontend" | "Backend" | "Cloud & Tools" | "Soft Skills";

  const mergedSkills = skillsData.flatMap((category) =>
    category.items.map((skill) => ({
      name: skill.name,
      proficiency: parseInt(skill.proficiency.toString(), 10), // Ensure numeric value
      category: category.category as SkillCategory, // Keep track of skill category
    }))
  );

  const categoryColors = {
    Frontend: "rgba(255, 99, 132, 0.6)",
    Backend: "rgba(54, 162, 235, 0.6)",
    "Cloud & Tools": "rgba(255, 206, 86, 0.6)",
    "Soft Skills": "rgba(75, 192, 192, 0.6)",
  };

  const borderColors = {
    Frontend: "rgba(255, 99, 132, 1)",
    Backend: "rgba(54, 162, 235, 1)",
    "Cloud & Tools": "rgba(255, 206, 86, 1)",
    "Soft Skills": "rgba(75, 192, 192, 1)",
  };

  const chartData = {
    labels: mergedSkills.map((skill) => skill.name), 
    datasets: [
      {
        label: "Skill Proficiency",
        data: mergedSkills.map((skill) => skill.proficiency),
        backgroundColor: mergedSkills.map((skill) => categoryColors[skill.category]),
        borderColor: mergedSkills.map((skill) => borderColors[skill.category]),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, 
    layout: {
      padding: 18,
    },
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          font: {
            size: 18,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            let skill = mergedSkills[tooltipItem.dataIndex];
            return `${skill.name}: ${skill.proficiency}% (${skill.category})`;
          },
        },
      },
    },
    scales: {
      r: {
        ticks: {
          font: {
            size: 18,
          },
          showLabelBackdrop: false,
        },
        grid: {
          circular: true,
        },
        angleLines: {
          display: true,
        },
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills Overview (All Categories)
        </h2>
        <div className="flex justify-center">
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center"
            style={{ width: "1000px", height: "800px" }} 
          >
            <PolarArea data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}
