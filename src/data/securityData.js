//todo: Security title and para
export const security = {
    title: 'Security Settings',
    para: 'Update your password and enable 2FA to keep your CiriBeautyCare account secure.'
}


//todo: security form
export const securityForm = {
    currentPassword: {
        label: 'Current Password',
        type: 'password',
        id: 'currentPassword',
        name: 'currentPassword',
        autoComplete: 'current-password',
        placeholder: 'Enter current password'
    },
    newPassword: {
        label: 'New Password',
        type: 'password',
        id: 'newPassword',
        name: 'newPassword',
        autoComplete: 'new-password',
        placeholder: 'Enter new password'
    },
    confirmPassword: {
        label: 'Confirm New Password',
        type: 'password',
        id: 'confirmPassword',
        name: 'confirmPassword',
        autoComplete: 'new-password',
        placeholder: 'Confirm new password'
    }
}


//todo: Form group
export const twoFactorData = {
    htmlFor: "twoFactor",
    label: "Enable Two-Factor Authentication (2FA)",
    id: "twoFactor",
    name: "twoFactor",
    autoComplete: "off",
    options: [
        { value: "off", text: "Disabled" },
        { value: "sms", text: "SMS Verification" },
        { value: "app", text: "Authenticator App" }
    ]
};


//todo: Update button 
export const btn = 'Update Security';


//todo: Security Tips
export const securityTips = {
    title: 'Security Tips',
    lists: [
        { list: 'Use a strong password with at least 12 characters, mixing uppercase, lowercase, numbers, and symbols.' },
        { list: 'Do not reuse passwords across multiple accounts.' },
        { list: 'Enable Two-Factor Authentication (2FA) for stronger protection.' },
        { list: 'Update your password every 3–6 months.' },
        { list: 'Be cautious of phishing emails or suspicious links..' },
        { list: 'Log out from shared or public devices after use.' }
    ]
}