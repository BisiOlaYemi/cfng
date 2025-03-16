import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import FormInput from './FormInput';
import RadioGroup from './RadioGroup';

const ApplicationForm: React.FC = () => {
  // Form state - all field names must match the EmailJS template variables
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    street: '',
    postalCode: '',
    city: '',
    country: '',
    email: '',
    phone: '',
    whatsappGroup: '',
    instagram: '',
    facebook: '',
    dateOfBirth: '',
    profession: '',
    familyStatus: '',
    church: '',
    ministries: '',
    pastorInfo: '',
    pastorContact: '',
    howLongKnownJesus: '',
    howCameToJesus: '',
    lastEvangelism: '',
    evangelismFrequency: '',
    evangelismPreference: '',
    presentationCalling: '',
    openAirCalling: '',
    hearAboutFireCamp: '',
    objective: '',
    preferredLanguage: '',
    crimeHistory: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
   
    const serviceId = 'YOUR_SERVICE_ID';  
    const templateId = 'YOUR_TEMPLATE_ID'; 
    const publicKey = 'YOUR_PUBLIC_KEY';   
    
    
    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitStatus({
          success: true,
          message: 'Your application has been submitted successfully! We will contact you soon.'
        });
        // reset the form after successful submission
        // setFormData({ ... initial state ... });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setSubmitStatus({
          success: false,
          message: 'There was an error submitting your application. Please try again later.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const titleOptions = [
    { value: 'Mr', label: 'Mister' },
    { value: 'Mrs', label: 'Mrs./Ms.' },
  ];

  const yesNoOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];

  return (
    <>
      <div className="mb-6">
        <p className="text-lg mb-8 font-bold">
          Please note: Our international team will be approving applications. If you fill
          out this form, you are giving us permission to share your data with
          our colleagues in Florida, USA.
        </p>
      </div>

      {submitStatus && (
        <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="emailjs-form">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Personal Information</h2>
          <RadioGroup
            label=""
            name="title"
            options={titleOptions}
            value={formData.title}
            onChange={handleChange}
            className="mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <FormInput
              label="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <FormInput
            label="Street + No."
            name="street"
            value={formData.street}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <FormInput
              label="Postal code"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
            <FormInput
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <FormInput
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="enter country"
            required
          />

          <FormInput
            label="E-Mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Phone No. (with country code)"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <FormInput
            label="Date of Birth"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Social Media</h2>
          <RadioGroup
            label="If accepted, would you allow us to add you to a Whatsapp Group to aid in communication for the FIRE CAMP ?"
            name="whatsappGroup"
            options={yesNoOptions}
            value={formData.whatsappGroup}
            onChange={handleChange}
            required
          />

          <RadioGroup
            label="Do you have Instagram?"
            name="instagram"
            options={yesNoOptions}
            value={formData.instagram}
            onChange={handleChange}
            required
          />

          <RadioGroup
            label="Do you have Facebook?"
            name="facebook"
            options={yesNoOptions}
            value={formData.facebook}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Background Information</h2>
          <FormInput
            label="What is your profession, or what do you do for work?"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="Are you single, or married, and do you have a family?"
            name="familyStatus"
            value={formData.familyStatus}
            onChange={handleChange}
            as="textarea"
            required
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Church Information</h2>
          <FormInput
            label="What church do you attend?"
            name="church"
            value={formData.church}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="What ministries are you involved in?"
            name="ministries"
            value={formData.ministries}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="What is your pastor's name and email address or phone? Do they approve of you applying to the Fire Camp ?"
            name="pastorInfo"
            value={formData.pastorInfo}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="Could we reach out to them to discuss your application ?"
            name="pastorContact"
            value={formData.pastorContact}
            onChange={handleChange}
            as="textarea"
            required
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Faith Journey</h2>
          <FormInput
            label="How long have you known Jesus?"
            name="howLongKnownJesus"
            value={formData.howLongKnownJesus}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="How did you come to Jesus?"
            name="howCameToJesus"
            value={formData.howCameToJesus}
            onChange={handleChange}
            as="textarea"
            required
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Evangelism Experience</h2>
          <FormInput
            label="When was the last time you led someone to Jesus or shared the Gospel? How did that happen?"
            name="lastEvangelism"
            value={formData.lastEvangelism}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="How often do you evangelize already?"
            name="evangelismFrequency"
            value={formData.evangelismFrequency}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="Do you like to evangelize with others or on your own?"
            name="evangelismPreference"
            value={formData.evangelismPreference}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="Do you feel called to presentation evangelism (presenting the gospel in front of groups of people)?"
            name="presentationCalling"
            value={formData.presentationCalling}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="Do you feel called to put on open-air gatherings in your country or around the world, where the Gospel is preached?"
            name="openAirCalling"
            value={formData.openAirCalling}
            onChange={handleChange}
            as="textarea"
            required
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Fire Camp Information</h2>
          <FormInput
            label="How did you hear about the Fire Camp ?"
            name="hearAboutFireCamp"
            value={formData.hearAboutFireCamp}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="What would be your main objective in attending the FIRE CAMP?"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            as="textarea"
            required
          />

          <FormInput
            label="Which language would you prefer to use for further communication?"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleChange}
            as="textarea"
            required
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Additional Information</h2>
          <FormInput
            label="Have you ever committed a crime (accused or not)? If so, please write a brief explanation about what happened."
            name="crimeHistory"
            value={formData.crimeHistory}
            onChange={handleChange}
            as="textarea"
            required
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-md shadow-md transition-all hover:shadow-lg transform hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </>
  );
};

export default ApplicationForm; 