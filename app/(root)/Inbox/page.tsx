"use client";

import HeaderBox from '@/components/HeaderBox';
import { getLoggedInUser, request } from '@/lib/utils';
import { loginResponse, Account } from '@/types';
import React, { useState, useEffect } from 'react';

const MyBanks = () => {
    const [loggedInUser, setLoggedInUser] = useState<loginResponse | null>(null);
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        const user = getLoggedInUser();
        setLoggedInUser(user);
        const fetchAccounts = async () => {
            try {
                const response = await request('GET', `/api/v1/accounts/user/${user?.userId}`);
                const userAccounts = response?.data;
                setAccounts(userAccounts);
            } catch (error: any) {
                console.error(error)
            }
        }
        fetchAccounts();
    }, [])


    return (
        <section className='flex'>
            <div className="my-banks">
                <HeaderBox
                    title="My Accounts"
                    subtext="safe and easy ride ."
                />

                <div className="space-y-4">
                    <h2 className="header-2">
                        Your cards
                    </h2>
                
                </div>
            </div>
        </section>
    )
}

export default MyBanks;