#!/usr/bin/env node

// This is a simple currency converter.
import inquirer from 'inquirer';

// Define type for currency object
type CurrencyObject = {
    [key: string]: number;
};

const Currency: CurrencyObject = {
    USD: 1,    // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    SAR: 0.27, //  SaudiRiyal to SAR
    AED: 0.27  //  United_Arab_Emirates_Dubai to AED
};

// Get user inputs
const converterInputs = await inquirer.prompt([
    {
        name: 'fromCurrency',
        message: '\nWhich currency do you want to convert: ',
        type: 'list',
        choices: Object.keys(Currency)
    },
    {
        name: 'toCurrency',
        message: 'In which currency do you want to convert: ',
        type: 'list',
        choices: Object.keys(Currency)
    },
    {
        name: 'amount',
        message: 'How much amount do you want to convert: ',
        type: 'number',
    }
]);

// Perform conversion
const fromAmount = Currency[converterInputs.fromCurrency];
const toAmount = Currency[converterInputs.toCurrency];
const userAmount = converterInputs.amount;
const baseAmount = userAmount / fromAmount;
const convertedAmount = Math.round(baseAmount * toAmount); // Round the converted amount

console.log('\n', `After conversion,the amount is  ${convertedAmount}\n`);
