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

    }, [])








    
}

export default SupportForm;