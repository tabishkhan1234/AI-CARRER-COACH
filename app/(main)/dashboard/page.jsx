import React from 'react'
import { getUserOnboardingStatus } from '../../../actions/user';
import { redirect } from 'next/navigation';

async function   Industryinsightpage() {

   const { isOnboarded } = await getUserOnboardingStatus();
     if (isOnboarded) {
      // Redirect to dashboard or another page if already onboarded
     redirect('/onboarding'); // Uncomment and adjust the path as needed
    }
  return (
    <div>Industryinsightpage</div>
  )
}

export default Industryinsightpage