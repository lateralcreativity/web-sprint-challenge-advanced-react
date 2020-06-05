import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    // Setup variables
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const checkoutButton = screen.getByTestId(/checkout/i);

    // Check if elements are actually found
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();
    expect(checkoutButton).toBeInTheDocument();

    // Events
    fireEvent.change(firstNameInput, { target: { value: 'Gabriel' } });
    fireEvent.change(lastNameInput, { target: { value: 'Delgado' } });
    fireEvent.change(addressInput, { target: { value: '1337 Test Drive' } });
    fireEvent.change(cityInput, { target: { value: 'Codeville' } });
    fireEvent.change(stateInput, { target: { value: 'IL' } });
    fireEvent.change(zipInput, { target: { value: '12345' } });
    fireEvent.click(checkoutButton);

    // Check if message at the bottom of form pops up after submitting
    const successMessage = screen.getByText(/You have ordered some plants!/i)
    expect(successMessage).toBeInTheDocument();
});
