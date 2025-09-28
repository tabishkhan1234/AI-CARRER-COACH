import { industries } from '@/data/industries'
import { getUserOnboardingStatus } from '../../../actions/user';

import OnboardingForm from './_components/onboarding-form'
import { redirect } from 'next/navigation';

const  onboardingPage=async  ()=> {


   const { isOnboarded } = await getUserOnboardingStatus();
   if (isOnboarded) {
    // Redirect to dashboard or another page if already onboarded
   redirect('/dashboard'); // Uncomment and adjust the path as needed
  }
  //check if user is already onboarded
  return (
    <main>
      <OnboardingForm industries={industries} />
      </main>
  )
}

export default onboardingPage
