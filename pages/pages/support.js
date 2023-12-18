import React from 'react'; 
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';
import SupportForm from '@/components/Pages/Support/SupportForm';

export default function Support() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Support</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Support</li>
        </ul>
      </div>

      {/* SupportForm */}
      <SupportForm />
    </>
  );
}
