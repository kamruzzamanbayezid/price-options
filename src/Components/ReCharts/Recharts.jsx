
import { LineChart, Line, XAxis, YAxis } from 'recharts';


const Recharts = () => {

      const reCharts = [
            { "student_id": 1, "name": "John Doe", "math_score": 85, "physics_score": 75, "chemistry_score": 90 },
            { "student_id": 2, "name": "Jane Smith", "math_score": 78, "physics_score": 80, "chemistry_score": 88 },
            { "student_id": 3, "name": "Alice Johnson", "math_score": 92, "physics_score": 88, "chemistry_score": 95 },
            { "student_id": 4, "name": "Bob Williams", "math_score": 88, "physics_score": 82, "chemistry_score": 91 },
            { "student_id": 5, "name": "Emily Davis", "math_score": 76, "physics_score": 72, "chemistry_score": 80 },
            { "student_id": 6, "name": "Michael Brown", "math_score": 94, "physics_score": 90, "chemistry_score": 96 },
            { "student_id": 7, "name": "Sarah Wilson", "math_score": 90, "physics_score": 85, "chemistry_score": 92 },
            { "student_id": 8, "name": "David Lee", "math_score": 82, "physics_score": 78, "chemistry_score": 85 },
            { "student_id": 9, "name": "Olivia White", "math_score": 87, "physics_score": 79, "chemistry_score": 88 },
            { "student_id": 10, "name": "William Clark", "math_score": 79, "physics_score": 74, "chemistry_score": 82 }
      ]


      return (
            <div>
                  <LineChart width={800} height={400} data={reCharts}>
                        <XAxis></XAxis>
                        <YAxis></YAxis>
                        <Line dataKey="math_score" stroke='red'></Line>
                        <Line dataKey="physics_score" stroke='yellow'></Line>
                        <Line dataKey="chemistry_score" stroke='green'></Line>
                  </LineChart>
            </div>
      );
};

export default Recharts;