import sec5 from '../assets/sec5.png';
import sec6 from '../assets/sec6.png';
import sec7 from '../assets/sec7.png';


const ScheduleSection = () => {
    return (
        <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Schedule your Vaccination</h2>
                <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img src={sec7} alt="Location" className="h-8 w-8" />
                        <span>Ikeja Lagos, Nigeria</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src={sec6} alt="Date" className="h-8 w-8" />
                        <span>29 February, 2022</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src={sec5} alt="Vaccine Type" className="h-8 w-8" />
                        <span>Moderna</span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleSection;