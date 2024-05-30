import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

interface formData {
    firsName: string;
    lastName: string;
    email: string;
    password: string;
    day: string;
    month: string;
    year: string;
}