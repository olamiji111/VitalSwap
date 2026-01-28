import React from "react";
import useFetch from "../services/usefetch"
import { fetchAccounts } from "../services/account-api"
import type { Account } from "../types";

const AccountsBlock = () => {
    const { data: accounts, loading, error } = useFetch<Account[]>(fetchAccounts);

    if (loading) return <p>Loading accounts...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!accounts?.length) return <p>No accounts found.</p>;

    return (
        <div className="space-y-4 px-4">
            {accounts.map((acc, idx) => (
                <div
                    key={idx}
                    className="border border-zinc-300 rounded-md p-4 flex flex-col gap-2"
                >
                    {/* Bank Name */}

                    <div className="flex items-center gap-x-2">
                        <p className="text-sm font-semibold text-primary-700">{acc.bank}</p>
                        {acc.primary && (
                            <span className="uppercase text-green-700 text-xs font-semibold px-2 py-0.5 bg-green-100 rounded-full">
                                PRIMARY
                            </span>
                        )}
                    </div>

                    {/* Account Name */}
                    <p className="text-xs text-gray-600">{acc.name}</p>

                    {/* Account Number */}
                    <p className="text-xs text-gray-500">{acc.accountNumber}</p>

                    {/* Transaction Type + Status */}
                    <div className="flex items-center gap-x-2">
                        {acc.status === "verified" && (
                            <span className="text-green-600 text-xs font-semibold">Verified</span>
                        )}
                        <p className="text-xs text-gray-500">{acc.transactionType}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccountsBlock;
