import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

interface formData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    day: string;
    month: string;
    year: string;
}

const SupportForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        day: "",
        month: "",
        year: ""
    })

    useEffect(() => {
        const currentDate = new Date();
        const currentDay = currentDate.getDate().toString();
        const currentMonth = (currentDate.getMonth() + 1).toString();
        const currentYear = currentDate.getFullYear().toString();

        setFormData(prevState => ({
            ...prevState,
            day: currentDay,
            month: currentMonth,
            year: currentYear
        }))

    }, [])

    const dayToMonth = (month: number, year: number): number => {
        return new Date(year, month, 0).getDate();
    }

    const daysArray = Array.from({
        length: dayToMonth(Number(formData.month),
            Number(formData.year))
    }, (_, index) => index + 1);

    const valideSchema = Yup.object({
        firstName: Yup.string().required("Nome é obrigatorio"),
        
    })



}

export default SupportForm;