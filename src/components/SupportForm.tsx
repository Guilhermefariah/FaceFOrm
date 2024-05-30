import React, { useState, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios"

interface FormData {
    firstName: string
    lastName: string
    email: string
    password: string
    day: string
    month: string
    year: string
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
        const currentDate = new Date()
        const currentDay = currentDate.getDate().toString()
        const currentMonth = (currentDate.getMonth() + 1).toString()
        const currentYear = currentDate.getFullYear().toString()

        setFormData(prevState => ({
            ...prevState,
            day: currentDay,
            month: currentMonth,
            year: currentYear
        }))
    }, [])

    const getDaysInMonth = (month: number, year: number): number => {
        return new Date(year, month, 0).getDate()
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Nome é obrigatório'),
        lastName: Yup.string().required('Sobrenome é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
        day: Yup.string().required('Dia é obrigatório'),
        month: Yup.string().required('Mês é obrigatório'),
        year: Yup.string().required('Ano é obrigatório')
    })

    const handleSubmit = async (values: FormData, { resetForm }: any) => {
        try {
            const response = await axios.post("http://localhost3000", values, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.status !== 200) {
                throw new Error("Ocorreu um erro ao enviar para o servidor")
            }

            resetForm()
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                day: "",
                month: "",
                year: ""
            })
            setForgot(false);
            alert("Formulário enviado com sucesso!")

        } catch (error) {
            if (error instanceof Error) {
                console.error("Erro ao enviar dados ao formulário:", error.message)
                alert("Erro ao enviar formulário: " + error.message)
            } else {
                console.error("Erro desconhecido", error)
                alert("Erro desconhecido ao enviar formulário.")
            }
        }
    }

    const [ForgotPassword, setForgot] = useState(false)

    const monthsArray: string[] = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    const daysArray = Array.from ( { length: getDaysInMonth(Number(formData.month), Number(formData.year)) }, (_, index) => index + 1)

    const yearsArray: number[] = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() + index)
   
    return (
        <div className="flex flex-col space-y-4">
            {ForgotPassword ? (
                <Formik
                    initialValues={{ ...formData, firstName: "", lastName: "", password: "", day: "", month: "", year: "" }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Email inválido').required('Email é obrigatório')
                    })}
                    onSubmit={(values, { resetForm }) => handleSubmit({ ...formData, ...values }, { resetForm })}
                >
                    {({ handleChange }) => (
                        <Form className="flex flex-col space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Enviar para o seu email:</label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        handleChange(e)
                                        setFormData(prevState => ({
                                            ...prevState,
                                            email: e.target.value
                                        }))
                                    }}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700">
                                Enviar
                            </button>
                            <button type="button" onClick={() => setForgot(false)} className="text-blue-500 hover:underline">
                                Voltar ao login
                            </button>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Formik
                    initialValues={formData}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ handleChange }) => (
                        <Form className="flex flex-col space-y-4">
                            <div className="flex">
                                <div className="mr-2">
                                    <label htmlFor="firstName" className="block text-lg font-semibold text-gray-700"></label>
                                    <Field
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Primeiro Nome"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-lg font-medium text-gray-700"></label>
                                    <Field
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Último Nome"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700"></label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="seuemail@exemplo.com"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-lg font-medium text-gray-700"></label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Digite sua senha"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="flex justify-center">
                                <div className="mr-2 w-1/3">
                                    <label htmlFor="day" className="block text-lg font-medium text-gray-700"></label>
                                    <Field
                                        as="select"
                                        id="day"
                                        name="day"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    >
                                        {daysArray.map((day) => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="day" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="mr-2 w-1/3">
                                    <label htmlFor="month" className="block text-lg font-medium text-gray-700"></label>
                                    <Field
                                        as="select"
                                        id="month"
                                        name="month"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    >
                                        {monthsArray.map((month, index) => (
                                            <option key={index + 1} value={index + 1}>{month}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="month" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="mr-2 w-1/3">
                                    <label htmlFor="year" className="block text-lg font-medium text-gray-700"></label>
                                    <Field
                                        as="select"
                                        id="year"
                                        name="year"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    >
                                        {yearsArray.map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="year" component="div" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <button type="submit" className="bg-green-700 text-white text-lg py-3 px-4 rounded hover:bg-green-700">
                                Cadastrar
                            </button>
                            <div className="flex justify-center items-center mt-2 text-lg">
                                <button type="button" onClick={() => setForgot(true)} className="text-blue-500 hover:underline">
                                    Esqueceu a senha?
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    )
}
export default SupportForm
