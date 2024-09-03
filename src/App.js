import React from 'react';
import HeroSection from '../src/components/HeroSection';
import ScheduleSection from '../src/components/ScheduleSection';
import Header from '../src/components/Header';
import WhyVaccinate from './components/WhyVaccinate';
import CovidResultForm from './components/CovidResultForm';
import VaccineRegistration from './components/VaccineRegistration';
import CovidSymptoms from './components/CovidSymptoms';
import PatientFeedback from './components/PatientFeedback';
import GetQuote from './components/GetQuote';
import Footer from './components/Footer';
import Company from './components/Company';

function App() {
    return (
        <div>
           <Header/>
            <HeroSection />
            <Company/>
            <CovidResultForm/>
            {/* <ScheduleSection /> */}
            <WhyVaccinate/>
            <VaccineRegistration/>
            <CovidSymptoms/>
            <PatientFeedback/>
            <GetQuote/>
            <Footer/>
            {/* Add more sections if needed */}
        </div>
    );
}

export default App;