/** WaveOrtho (c) 2025 | WaveOrtho Inquiry Form & Exam Scheduler [version: 7.5.8] */

"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.$wave_CONSTANTS = function () {
  return {
    APP_FORM_ID: 'waveInquiryForm',
    TEXT: {
      HEADER: {
        english: 'Request Your Consultation',
        spanish: 'Solicita tu consulta',
        french: 'Demandez votre consultation'
      },
      FIELD_IS_REQUIRED: {
        english: 'this field is required',
        spanish: 'este campo es requerido',
        french: 'Ce champ est requis'
      },
      IN: {
        english: 'in',
        spanish: 'en',
        french: 'dans'
      },
      AT: {
        english: 'at',
        spanish: 'a',
        french: 'à'
      },
      WITH: {
        english: 'with',
        spanish: 'con',
        french: 'avec'
      },
      SELECT_THIS_LOCATION: {
        english: 'Select This Location',
        spanish: 'Seleccione esta ubicación',
        french: 'Sélectionnez cet emplacement'
      },
      APPOINTMENT_CALL_ME_SUCCESS_MESSAGE: {
        english: 'Our office will call you to schedule an appointment',
        spanish: 'Nuestra oficina lo llamará para programar una cita.',
        french: 'Notre bureau vous appellera pour fixer un rendez-vous'
      },
      EMAIL_IS_REQUIRED: {
        english: 'Email is required',
        spanish: 'Correo electronico es requerido',
        french: 'L\'email est requis'
      },
      EMAIL_IS_INVALID: {
        english: 'Email is invalid',
        spanish: 'Correo electrónico es invalido',
        french: 'Le courriel est invalide'
      },
      PHONE_IS_REQUIRED: {
        english: 'Phone is required',
        spanish: 'Se requiere número de teléfono',
        french: 'Le téléphone est requis'
      },
      PHONE_IS_INVALID: {
        english: 'Phone Number is invalid. Please limit it to 10 numbers only.',
        spanish: 'El número de teléfono no es válido. Limítelo solo a 10 números.',
        french: 'Le numéro de téléphone n\'est pas valide. Veuillez le limiter à 10 chiffres seulement.'
      },
      PLEASE_SELECT_APPOINTMENT: {
        english: 'Please select a day and time that works best for you',
        spanish: 'Por favor elige un dia y tiempo que trabaja mejor para usted',
        french: 'Veuillez sélectionner un jour et une heure qui vous conviennent le mieux'
      },
      RESET_ALERT: {
        english: 'All information entered will be lost',
        spanish: 'Toda la información ingresada se perderá',
        french: 'Toutes les informations saisies seront perdues'
      },
      YOU_HAVE: {
        english: 'You have',
        spanish: 'Tienes',
        french: 'Vous avez'
      },
      ERRORS: {
        english: 'errors',
        spanish: 'errores',
        french: 'les erreurs'
      },
      ERROR: {
        english: 'error',
        spanish: 'error',
        french: 'Erreur'
      },
      TO_ADDRESS: {
        english: 'to address',
        spanish: 'cambiar',
        french: 'changer'
      },
      SUBMISSION_ERROR_MESSAGE: {
        english: 'An unknown error occurred while submitting your information, please try again later.',
        spanish: 'Se produjo un error desconocido al enviar su información. Vuelva a intentarlo más tarde.',
        french: 'Une erreur inconnue s\'est produite lors de la soumission de vos informations, veuillez réessayer plus tard.'
      },
      APPOINTMENT_SCHEDULER_TITLE_TEXT: {
        english: 'Schedule Your Exam Appointment',
        spanish: 'Programe su cita de examen',
        french: 'Planifiez votre rendez-vous d\'examen'
      },
      APPOINTMENT_SCHEDULER_CHANGE_APPOINTMENT_TEXT: {
        english: 'Change',
        spanish: 'Cambiar',
        french: 'Changer'
      },
      APPOINTMENT_SCHEDULER_SUCCESS_MESSAGE: {
        english: 'Please complete the form below to reserve your appointment time and we will send you a confirmation message.',
        spanish: 'Complete el siguiente formulario para reservar la hora de su cita y le enviaremos un mensaje de confirmación.',
        french: 'Veuillez remplir le formulaire ci-dessous pour réserver votre rendez-vous et nous vous enverrons un message de confirmation.'
      },
      APPOINTMENT_SCHEDULER_CALL_ME_SUCCESS_MESSAGE: {
        english: 'Please complete the form below and we will call you to schedule your appointment.',
        spanish: 'Por favor complete la forma que sigue para reservar su consulta y les enviaremos un texto de confirmación.',
        french: 'Veuillez remplir le formulaire ci-dessous et nous vous appellerons pour planifier votre rendez-vous.'
      },
      APPOINTMENT_SCHEDULER_DESCRIPTION_TEXT: {
        english: 'Select a day and time that works for you, and we\'ll contact you to confirm your appointment.',
        spanish: 'Seleccione un día y tiempo que trabaja para usted. Nuestra oficina les contactará para confirmar su consulta.',
        french: 'Sélectionnez un jour et une heure qui vous conviennent et nous vous contacterons pour confirmer votre rendez-vous.'
      },
      APPOINTMENT_SCHEDULER_UNAVAILABLE_APPOINTMENT_TEXT: {
        english: 'unavailable',
        spanish: 'indisponible',
        french: 'indisponible'
      },
      WARNING_MESSAGE: {
        english: 'Please do not submit any Protected Health Information (PHI). This is not a secure or encrypted means of communicating with our orthodontics office.',
        spanish: 'Por favor, no envíe información de Salud Protegida. Este no es un medio seguro o encriptado para comunicación con nuestra oficina.',
        french: 'Veuillez ne soumettre aucune information de santé protégée. Ce n\'est pas un moyen sécurisé ou crypté de communiquer avec notre cabinet d\'orthodontie.'
      },
      SUBMISSION_SUCCESS_MESSAGE: {
        english: 'Thank you for requesting an appointment! We will follow up shortly and we look forward to speaking with you!',
        spanish: '¡Gracias por solicitar una cita! ¡Haremos un seguimiento en breve y esperamos hablar con usted!',
        french: 'Merci d\'avoir demandé un rendez-vous! Nous ferons un suivi sous peu et nous avons hâte de vous parler!'
      },
      SUBMISSION_SUCCESS_TITLE: {
        english: 'Submission Successful!',
        spanish: 'Envío exitoso!',
        french: 'Soumission réussie!'
      },
      DESCRIPTION: {
        english: '',
        spanish: '',
        french: ''
      },
      SAVE_BUTTON_TEXT: {
        english: 'Submit',
        spanish: 'Enviar',
        french: 'Soumettre'
      },
      PROVIDE_MORE_DETAILS: {
        english: 'Please provide additional information',
        spanish: 'Por favor proporcione información adicional',
        french: 'Veuillez fournir des informations supplémentaires'
      },
      RESET_BUTTON_TEXT: {
        english: 'Reset Form',
        spanish: 'Restablecer formulario',
        french: 'Formulaire de réinitialisation'
      },
      WORD_OF_MOUTH_OTHER: {
        english: 'Word of Mouth, Doctor, etc.',
        spanish: 'De boca en boca, doctor, etc.',
        french: 'Bouche à oreille, docteur, etc.'
      },
      APPOINTMENT_SCHEDULER_HELP_TEXT: {
        english: 'Click the arrows on the sides to change dates',
        spanish: 'Haga clic a las flechas al lado para cambiar las fechas.',
        french: 'Cliquez sur les flèches sur les côtés pour modifier les dates'
      },
      PLEASE_CALL_ME_TEXT: {
        english: 'Please call me instead',
        spanish: 'Por favor llámame en su lugar',
        french: 'Veuillez m\'appeler à la place'
      },
      YOU_HAVE_SELECTED: {
        english: 'You have selected an appointment for',
        spanish: 'Usted ha seleccionado la consulta para',
        french: 'Vous avez sélectionné un rendez-vous pour'
      },
      CLICK_THE_ARROWS_TO_CHANGE_DATES: {
        english: 'Click the arrows on the sides to change dates',
        spanish: 'Haz clic en las flechas a los lados para cambiar las fechas.',
        french: 'Cliquez sur les flèches sur les côtés pour modifier les dates'
      },
      OUR_OFFICE_WILL_CALL_YOU_TO_SCHEDULE_APPOINTMENT: {
        english: 'Our office will call you to schedule an appointment',
        spanish: 'Nuestra oficina lo llamará para programar una cita.',
        french: 'Notre bureau vous appellera pour fixer un rendez-vous'
      }
    },
    CSS_LIBRARIES: {
      'bootstrap': {
        FORM: '',
        FORM_GROUP: 'form-group',
        FORM_INPUT: 'form-control',
        FORM_CHECK: 'form-check',
        ERROR_MESSAGE: 'text-danger',
        INPUT_LABEL: '',
        INPUT_LABEL_REQUIRED: 'text-danger',
        BUTTON_SUBMIT: 'btn btn-primary',
        BUTTON_RESET: 'btn btn-warning ml-1',
        TITLE: '',
        DESCRIPTION: '',
        ALERT: 'alert alert-info',
        DISCLAIMER: 'text-muted mt-1',
        WARNING: 'text-muted mt-1',
        SUCCESS_MESSAGE_TITLE: '',
        SUCCESS_MESSAGE_BOX: '',
        SUCCESS_MESSAGE_TEXT: 'alert alert-success',
        APPOINTMENT_SCHEDULER: '',
        APPOINTMENT_SCHEDULER_TITLE: 'text-center',
        APPOINTMENT_SCHEDULER_DESCRIPTION: 'text-center text-muted',
        APPOINTMENT_SCHEDULER_HELP_TEXT: 'text-center text-muted',
        APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_DETAILS: 'text-muted',
        APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_HEADER: 'h5',
        APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_CHANGE_BUTTON: 'btn btn-info',
        APPOINTMENT_SCHEDULER_TABLE: 'table-striped table table-bordered table-sm align-middle',
        APPOINTMENT_SCHEDULER_BODY_ROW: 'align-middle',
        APPOINTMENT_SCHEDULER_TIME_DATE_CELL: 'text-center align-middle',
        APPOINTMENT_SCHEDULER_HEADER: 'text-center align-middle',
        APPOINTMENT_SCHEDULER_HEADER_DAY_OF_WEEK: '',
        APPOINTMENT_SCHEDULER_HEADER_MONTH: 'text-muted',
        APPOINTMENT_SCHEDULER_HEADER_ROW: 'align-middle',
        APPOINTMENT_SCHEDULER_HEADER_ARROWS: 'text-center align-middle h3'
      },
      'bootstrap-3': {
        FORM: '',
        FORM_GROUP: 'form-group',
        FORM_INPUT: 'form-control',
        FORM_CHECK: 'form-check',
        ERROR_MESSAGE: 'text-danger',
        INPUT_LABEL: '',
        INPUT_LABEL_REQUIRED: 'text-danger',
        BUTTON_SUBMIT: 'btn btn-primary',
        BUTTON_RESET: 'btn btn-warning',
        TITLE: '',
        DESCRIPTION: '',
        ALERT: 'alert alert-info',
        DISCLAIMER: 'text-muted',
        WARNING: 'text-muted',
        SUCCESS_MESSAGE_TITLE: '',
        SUCCESS_MESSAGE_BOX: '',
        SUCCESS_MESSAGE_TEXT: 'alert alert-success',
        APPOINTMENT_SCHEDULER: '',
        APPOINTMENT_SCHEDULER_TITLE: 'text-center',
        APPOINTMENT_SCHEDULER_DESCRIPTION: 'text-center help-block',
        APPOINTMENT_SCHEDULER_HELP_TEXT: 'text-center help-block',
        APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_DETAILS: 'help-block',
        APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_HEADER: '',
        APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_CHANGE_BUTTON: 'btn btn-info',
        APPOINTMENT_SCHEDULER_TABLE: 'table-striped table table-bordered table-condensed align-middle',
        APPOINTMENT_SCHEDULER_BODY_ROW: 'align-middle',
        APPOINTMENT_SCHEDULER_TIME_DATE_CELL: 'text-center align-middle',
        APPOINTMENT_SCHEDULER_HEADER: 'text-center align-middle',
        APPOINTMENT_SCHEDULER_HEADER_DAY_OF_WEEK: '',
        APPOINTMENT_SCHEDULER_HEADER_MONTH: 'help-block',
        APPOINTMENT_SCHEDULER_HEADER_ROW: 'align-middle',
        APPOINTMENT_SCHEDULER_HEADER_ARROWS: 'text-center align-middle h3'
      }
    },
    SETTINGS: {
      SOURCE: '',
      SOURCE_DETAILS: '',
      REMOVE_URL_APPOINTMENT_MESSAGE: false,
      NO_WEEKENDS: false,
      DEFAULT_LOCATION: 1,
      NO_DEFAULT_LOCATION: false,
      SUBMISSION_REDIRECT_URL: null,
      MAP_IMMEDIATE_CHANGE_MODE: true,
      DEFAULT_PATIENT_STATUS: 'New Patient',
      LANGUAGE: 'english',
      LANGUAGE_OPTIONS: [],
      HIDE_LOCATIONS: false,
      HIDE_LOCATION_OPTIONS: null
    },
    SERVICES: {
      english: ['Consultation', 'Consultation for Clear Aligners', 'Consultation for Braces', 'Consultation for Jaw Pain', 'Other'],
      spanish: [{
        value: 'Consultation',
        text: 'Consulta'
      }, {
        value: 'Consultation for Clear Aligners',
        text: 'Consulta para Alineadores transparentes'
      }, {
        value: 'Consultation for Braces',
        text: 'Consulta para llaves'
      }, {
        value: 'Consultation for Jaw Pain',
        text: 'Consulta para dolor de mandíbula'
      }, {
        value: 'Other',
        text: 'Otra'
      }],
      french: [{
        value: 'Consultation',
        text: 'Consultation'
      }, {
        value: 'Consultation for Clear Aligners',
        text: 'Consultation pour Effacer les aligneurs'
      }, {
        value: 'Consultation for Braces',
        text: 'Consultation pour accolades'
      }, {
        value: 'Consultation for Jaw Pain',
        text: 'Consultation pour la douleur à la mâchoire'
      }, {
        value: 'Other',
        text: 'Autre'
      }]
    },
    AGE_OPTIONS: {
      english: ['Toddler (1 - 2)', 'Pre-Schooler (3 - 4)', 'Child (5 - 9)', 'Pre-Teen (10 - 12)', 'Early-Teen (13 - 15)', 'Late-Teen (16 - 19)', 'Young Adult (20 - 30)', 'Adult (31-64)', 'Senior (65+)'],
      spanish: [{
        value: 'Toddler (1 - 2)',
        text: 'Niñito (1 - 2)'
      }, {
        value: 'Pre-Schooler (3 - 4)',
        text: 'Preescolar (3 - 4)'
      }, {
        value: 'Child (5 - 9)',
        text: 'Niño (5 - 9)'
      }, {
        value: 'Pre-Teen (10 - 12)',
        text: 'Pre-adolescente (10 - 12)'
      }, {
        value: 'Early-Teen (13 - 15)',
        text: 'Adolescente temprano  (13 - 15)'
      }, {
        value: 'Late-Teen (16 - 19)',
        text: 'Adolescente tardío  (16 - 19)'
      }, {
        value: 'Young Adult (20 - 30)',
        text: 'Adulto joven  (20 - 30)'
      }, {
        value: 'Adult (31-64)',
        text: 'Adulto  (31-64)'
      }, {
        value: 'Senior (65+)',
        text: 'Mayor  (65+)'
      }],
      french: [{
        value: 'Toddler (1 - 2)',
        text: 'Bambin (1 - 2)'
      }, {
        value: 'Pre-Schooler (3 - 4)',
        text: 'Enfant d\'âge préscolaire (3 - 4)'
      }, {
        value: 'Child (5 - 9)',
        text: 'Enfant (5 - 9)'
      }, {
        value: 'Pre-Teen (10 - 12)',
        text: 'Pré-ado (10 - 12)'
      }, {
        value: 'Early-Teen (13 - 15)',
        text: 'Adolescent précoce (13 - 15)'
      }, {
        value: 'Late-Teen (16 - 19)',
        text: 'Fin adolescent (16 - 19)'
      }, {
        value: 'Young Adult (20 - 30)',
        text: 'Jeune adulte (20 - 30)'
      }, {
        value: 'Adult (31-64)',
        text: 'Adulte (31-64)'
      }, {
        value: 'Senior (65+)',
        text: 'Sénior (65+)'
      }]
    },
    DAY_NAMES_SHORT: {
      english: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      spanish: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      french: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    },
    DAY_NAMES_LONG: {
      english: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      spanish: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      french: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    },
    MONTH_NAMES_SHORT: {
      english: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      spanish: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      french: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
    },
    AM_PM: {
      AM: {
        english: 'AM',
        spanish: 'AM',
        french: ''
      },
      PM: {
        english: 'PM',
        spanish: 'PM',
        french: ''
      }
    },
    VALIDATIONS: {
      EMAIL: true,
      PHONE: false
    },
    DATABASE_KEY_MAP: {
      patientStatus: 'patientType',
      locations: 'location',
      services: 'visitType',
      reference: 'referralCategory',
      firstName: 'first_name',
      lastName: 'last_name',
      age: 'ageRange',
      appointmentScheduler: 'Appt_ID',
      appointmentCallMe: 'callMe',
      email: 'email',
      phone: 'phone',
      inquiry: 'message',
      textMessageConsent: 'textMessageConsent'
    },
    PLACEHOLDERS: {
      FIRST_NAME: {
        english: 'Patient First Name',
        spanish: 'Primer Nombre de Paciente',
        french: 'Prénom du patient'
      },
      LAST_NAME: {
        english: 'Patient Last Name',
        spanish: 'Apellido de Paciente',
        french: 'Nom du patient'
      },
      EMAIL: {
        english: 'Email Address',
        spanish: 'Correo Electrónico',
        french: 'Adresse e-mail'
      },
      PHONE: {
        english: 'Phone Number',
        spanish: 'Número de Teléfono',
        french: 'Numéro de téléphone'
      },
      INQUIRY: {
        english: '',
        spanish: '',
        french: ''
      }
    },
    LABELS: {
      PATIENT_STATUS: {
        english: 'Have you visited us before?',
        spanish: '¿Nos has visitado antes?',
        french: 'Vous nous avez déjà rendu visite?'
      },
      LOCATION: {
        english: 'Select a location',
        spanish: 'Seleccione una localización',
        french: 'Choisissez un lieu'
      },
      SERVICES: {
        english: 'What can we help you with?',
        spanish: '¿Qué podemos ayudarte?',
        french: 'En quoi pouvons-nous vous aider?'
      },
      REFERENCES: {
        english: 'How did you hear about us?',
        spanish: '¿Cómo nos encontró?',
        french: 'Comment avez-vous entendu parler de nous?'
      },
      FIRST_NAME: {
        english: 'Patient First Name',
        spanish: 'Primer Nombre de Paciente',
        french: 'Prénom du patient'
      },
      LAST_NAME: {
        english: 'Patient Last Name',
        spanish: 'Apellido de Paciente',
        french: 'Nom du patient'
      },
      AGE: {
        english: 'Patient Age',
        spanish: 'La edad del paciente',
        french: 'Âge du patient'
      },
      EMAIL: {
        english: 'Email',
        spanish: 'Correo Electrónico',
        french: 'Email'
      },
      PHONE: {
        english: 'Mobile Phone',
        spanish: 'Número de Teléfono',
        french: 'Téléphone portable'
      },
      INQUIRY: {
        english: 'Question/Message',
        spanish: 'Preguntas/Mensaje',
        french: 'Question/Message'
      },
      TEXT_MESSAGE_CONSENT: {
        english: '*By submitting this form you consent to receiving text messages from this office.',
        spanish: 'Doy mi consentimiento para recibir mensajes de texto en este número de teléfono. La frecuencia de los mensajes varía, pueden aplicarse tarifas de mensajes y datos. Los tipos de mensajes pueden incluir: marketing (por ejemplo, promociones), atención al paciente y/o mensajes conversacionales. Responda STOP para darse de baja; AYUDA para más información.La frecuencia de los mensajes varía, pueden aplicarse tarifas de mensajes y datos. Los tipos de mensajes pueden incluir: marketing (por ejemplo, promociones), atención al paciente y/o mensajes conversacionales. Responda STOP para darse de baja; AYUDA para más información.',
        french: 'J\'accepte de recevoir des SMS à ce numéro de téléphone. La fréquence des messages varie, des tarifs de messages et de données peuvent s\'appliquer. Les types de messages peuvent inclure: le marketing (par exemple, les promotions), les soins aux patients et/ou les messages conversationnels. Répondez STOP pour vous désinscrire; AIDE pour plus d\'informations.'
      },
      TEXT_MESSAGE_CONSENT_1: {
        english: 'I consent to receive text messages from',
        spanish: 'Doy mi consentimiento para recibir mensajes de texto de',
        french: 'J\'accepte de recevoir des messages texte de'
      },
      TEXT_MESSAGE_CONSENT_2: {
        english: '',
        // english: '. Message frequency varies, message and data rates may apply. Message types may include: marketing (eg. Promos), patient care and/or conversational messages. Reply STOP to opt-out; HELP for more information.',
        spanish: '. La frecuencia de los mensajes varía, pueden aplicarse tarifas de mensajes y datos. Los tipos de mensajes pueden incluir: marketing (por ejemplo, promociones), atención al paciente y/o mensajes conversacionales. Responda STOP para darse de baja; AYUDA para más información.',
        french: '. La fréquence des messages varie, des tarifs de messages et de données peuvent s\'appliquer. Les types de messages peuvent inclure: le marketing (par exemple, les promotions), les soins aux patients et/ou les messages conversationnels. Répondez STOP pour vous désinscrire; AIDE pour plus d\'informations.'
      },
      VIEW_PRIVACY_POLICY: {
        english: 'View our Privacy Policy',
        spanish: 'Ver nuestra Política de Privacidad',
        french: 'Consultez notre politique de confidentialité'
      },
      AND: {
        english: 'and',
        spanish: 'y',
        french: 'et'
      },
      VIEW_TERMS_OF_SERVICE: {
        english: 'Terms of Service',
        spanish: 'Términos de servicio',
        french: 'Conditions d\'utilisation'
      }
    },
    SHOW: {
      PLACEHOLDERS: true,
      DISCLAIMER: true,
      WARNING: true,
      RESET_ALERT: true,
      HEADER: true,
      APPOINTMENT_SCHEDULER: true,
      RESET_BUTTON: false,
      PLEASE_CALL_ME: true,
      AGE: false,
      INQUIRY: true,
      REFERENCE: false,
      GOOGLE_MAPS_LOCAL: true,
      DEFAULT_LOCATION_ON_MAP_ONLY_ON_MAP: false,
      TODAYS_APPOINTMENTS: true,
      PATIENT_STATUS: false,
      SERVICES: false,
      LOCATIONS_POPOVER: false
    },
    CLASSES: {
      FORM: 'wave-form-container',
      FORM_GROUP: 'wave-form-group',
      FORM_INPUT: 'wave-form-control',
      FORM_CHECK: 'wave-form-check',
      CHECKBOX_LABEL: 'wave-form-checkbox-label',
      ERROR_MESSAGE: 'wave-error-message',
      INPUT_LABEL: 'wave-form-label',
      INPUT_LABEL_REQUIRED: 'wave-form-required',
      BUTTON_SUBMIT: 'wave-form-button wave-form-button-submit',
      BUTTON_RESET: 'wave-form-button wave-form-button-reset',
      APPOINTMENT_SCHEDULER: 'wave-appointment-scheduler',
      APPOINTMENT_SCHEDULER_TITLE: 'wave-appointment-scheduler-title',
      APPOINTMENT_SCHEDULER_DESCRIPTION: 'wave-appointment-scheduler-description',
      APPOINTMENT_SCHEDULER_HELP_TEXT: 'wave-appointment-scheduler-help-text',
      APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_HEADER: 'wave-completion-message-header',
      APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_DETAILS: 'wave-completion-message-details',
      APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_CHANGE_BUTTON: 'wave-form-button wave-form-button-info wave-scheduler-change-appointment-button',
      APPOINTMENT_SCHEDULER_TABLE: 'wave-table',
      APPOINTMENT_SCHEDULER_BODY_ROW: '',
      APPOINTMENT_SCHEDULER_TIME_DATE_CELL: 'time-date-cell',
      APPOINTMENT_SCHEDULER_HEADER: 'table-date-header',
      APPOINTMENT_SCHEDULER_HEADER_DAY_OF_WEEK: 'day-of-week',
      APPOINTMENT_SCHEDULER_HEADER_MONTH: 'month',
      APPOINTMENT_SCHEDULER_HEADER_ROW: '',
      APPOINTMENT_SCHEDULER_HEADER_ARROWS: 'table-arrow-selector',
      PLEASE_CALL_ME: 'wave-appointment-scheduler-please-call-me',
      TITLE: 'wave-form-title',
      DESCRIPTION: 'wave-form-description',
      ALERT: 'wave-form-alert',
      LANGUAGE_PICKER: 'wave-language-picker',
      WARNING: 'wave-form-warning',
      SUCCESS_MESSAGE_TITLE: 'wave-success-message-title',
      SUCCESS_MESSAGE_BOX: 'wave-success-message-box',
      SUCCESS_MESSAGE_TEXT: 'wave-success-message-text'
    },
    REQUIREMENTS: {
      PATIENT_STATUS: true,
      LOCATIONS: true,
      SERVICES: true,
      REFERENCES: true,
      FIRST_NAME: true,
      LAST_NAME: true,
      AGE: false,
      EMAIL: true,
      PHONE: false,
      APPOINTMENT_SCHEDULER: true,
      INQUIRY: false,
      TEXT_MESSAGE_CONSENT: true
    },
    REFERRAL_METHODS: {
      english: ['Doctor', 'Word of Mouth', 'Dental Insurance', 'Internet Search', 'Social Media', 'Advertisements', 'Other'],
      spanish: [{
        value: 'Doctor',
        text: 'Médico'
      }, {
        value: 'Word of Mouth',
        text: 'Boca a boca'
      }, {
        value: 'Dental Insurance',
        text: 'Seguro dental'
      }, {
        value: 'Internet Search',
        text: 'Busqueda de internet'
      }, {
        value: 'Social Media',
        text: 'Medios de comunicación social'
      }, {
        value: 'Advertisements',
        text: 'Anuncios'
      }, {
        value: 'Other',
        text: 'Otro'
      }],
      french: [{
        value: 'Doctor',
        text: 'Médecin'
      }, {
        value: 'Word of Mouth',
        text: 'Bouche à oreille'
      }, {
        value: 'Dental Insurance',
        text: 'Assurance dentaire'
      }, {
        value: 'Internet Search',
        text: 'Recherche Internet'
      }, {
        value: 'Social Media',
        text: 'Des médias sociaux'
      }, {
        value: 'Advertisements',
        text: 'Annonces'
      }, {
        value: 'Other',
        text: 'Autre'
      }]
    },
    PATIENT_CURRENT_STATUS: {
      english: ['New Patient', 'Current Patient', 'Previous Patient'],
      spanish: [{
        value: 'New Patient',
        text: 'Paciente nuevo'
      }, {
        value: 'Current Patient',
        text: 'Paciente actual'
      }, {
        value: 'Previous Patient',
        text: 'Paciente anterior'
      }],
      french: [{
        value: 'New Patient',
        text: 'Nouveau patient'
      }, {
        value: 'Current Patient',
        text: 'Patient actuel'
      }, {
        value: 'Previous Patient',
        text: 'Patient précédent'
      }]
    },
    VALID_LANGUAGES: ['english', 'spanish', 'french']
  };
}();

window.$wave_ATTRIBUTE_CONFIG_MAP = function () {
  var CONSTANTS = window.$wave_CONSTANTS;
  var returnArray = []; //==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-//

  var CLASSES = [{
    attribute: 'data-form-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.FORM;
    },
    group: 'CLASSES',
    key: 'FORM'
  }, {
    attribute: 'data-form-group-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.FORM_GROUP;
    },
    group: 'CLASSES',
    key: 'FORM_GROUP'
  }, {
    attribute: 'data-form-check',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.FORM_CHECK;
    },
    group: 'CLASSES',
    key: 'FORM_CHECK'
  }, {
    attribute: 'data-appointment-scheduler-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER'
  }, {
    attribute: 'data-appointment-scheduler-header-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_HEADER;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_HEADER'
  }, {
    attribute: 'data-appointment-scheduler-title-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_TITLE;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_TITLE'
  }, {
    attribute: 'data-appointment-scheduler-description-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_DESCRIPTION;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_DESCRIPTION'
  }, {
    attribute: 'data-appointment-scheduler-please-call-me-class',
    appendable: true,
    "default": function _default() {
      return CONSTANTS.CLASSES.PLEASE_CALL_ME;
    },
    type: 'overwrite',
    group: 'CLASSES',
    key: 'PLEASE_CALL_ME'
  }, {
    attribute: 'data-appointment-scheduler-help-text-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_HELP_TEXT;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_HELP_TEXT'
  }, {
    attribute: 'data-appointment-scheduler-completion-change-button-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_CHANGE_BUTTON;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_CHANGE_BUTTON'
  }, {
    attribute: 'data-appointment-scheduler-completion-message-header-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_HEADER;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_HEADER'
  }, {
    attribute: 'data-appointment-scheduler-completion-message-details-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_DETAILS;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_DETAILS'
  }, {
    attribute: 'data-appointment-scheduler-table-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_TABLE;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_TABLE'
  }, {
    attribute: 'data-appointment-scheduler-body-row-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_BODY_ROW;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_BODY_ROW'
  }, {
    attribute: 'data-appointment-scheduler-time-date-cell-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_TIME_DATE_CELL;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_TIME_DATE_CELL'
  }, {
    attribute: 'data-appointment-scheduler-header-day-of-week-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_HEADER_DAY_OF_WEEK;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_HEADER_DAY_OF_WEEK'
  }, {
    attribute: 'data-appointment-scheduler-header-month-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_HEADER_MONTH;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_HEADER_MONTH'
  }, {
    attribute: 'data-appointment-scheduler-header-row-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_HEADER_ROW;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_HEADER_ROW'
  }, {
    attribute: 'data-appointment-scheduler-header-arrows-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.APPOINTMENT_SCHEDULER_HEADER_ARROWS;
    },
    group: 'CLASSES',
    key: 'APPOINTMENT_SCHEDULER_HEADER_ARROWS'
  }, {
    attribute: 'data-form-input-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.FORM_INPUT;
    },
    group: 'CLASSES',
    key: 'FORM_INPUT'
  }, {
    attribute: 'data-error-message-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.ERROR_MESSAGE;
    },
    group: 'CLASSES',
    key: 'ERROR_MESSAGE'
  }, {
    attribute: 'data-warning-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.WARNING;
    },
    group: 'CLASSES',
    key: 'WARNING'
  }, {
    attribute: 'data-language-picker-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.LANGUAGE_PICKER;
    },
    group: 'CLASSES',
    key: 'LANGUAGE_PICKER'
  }, {
    attribute: 'data-input-label-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.INPUT_LABEL;
    },
    group: 'CLASSES',
    key: 'INPUT_LABEL'
  }, {
    attribute: 'data-input-required-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.INPUT_LABEL_REQUIRED;
    },
    group: 'CLASSES',
    key: 'INPUT_LABEL_REQUIRED'
  }, {
    attribute: 'data-checkbox-label-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.CHECKBOX_LABEL;
    },
    group: 'CLASSES',
    key: 'CHECKBOX_LABEL'
  }, {
    attribute: 'data-button-submit-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.BUTTON_SUBMIT;
    },
    group: 'CLASSES',
    key: 'BUTTON_SUBMIT'
  }, {
    attribute: 'data-button-reset-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.BUTTON_RESET;
    },
    group: 'CLASSES',
    key: 'BUTTON_RESET'
  }, {
    attribute: 'data-title-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.TITLE;
    },
    group: 'CLASSES',
    key: 'TITLE'
  }, {
    attribute: 'data-success-message-box-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.SUCCESS_MESSAGE_BOX;
    },
    group: 'CLASSES',
    key: 'SUCCESS_MESSAGE_BOX'
  }, {
    attribute: 'data-success-message-text-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.SUCCESS_MESSAGE_TEXT;
    },
    group: 'CLASSES',
    key: 'SUCCESS_MESSAGE_TEXT'
  }, {
    attribute: 'data-description-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.DESCRIPTION;
    },
    group: 'CLASSES',
    key: 'DESCRIPTION'
  }, {
    attribute: 'data-alert-class',
    appendable: true,
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.CLASSES.ALERT;
    },
    group: 'CLASSES',
    key: 'ALERT'
  }];
  var LABEL = [{
    attribute: 'data-label-patient-status',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.PATIENT_STATUS;
    },
    group: 'LABEL',
    key: 'PATIENT_STATUS'
  }, {
    attribute: 'data-label-location',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.LOCATION;
    },
    group: 'LABEL',
    key: 'LOCATION'
  }, {
    attribute: 'data-label-age-dropdown',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.AGE;
    },
    group: 'LABEL',
    key: 'AGE'
  }, {
    attribute: 'data-label-services',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.SERVICES;
    },
    group: 'LABEL',
    key: 'SERVICES'
  }, {
    attribute: 'data-label-references',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.REFERENCES;
    },
    group: 'LABEL',
    key: 'REFERENCES'
  }, {
    attribute: 'data-label-first-name',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.FIRST_NAME;
    },
    group: 'LABEL',
    key: 'FIRST_NAME'
  }, {
    attribute: 'data-label-last-name',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.LAST_NAME;
    },
    group: 'LABEL',
    key: 'LAST_NAME'
  }, {
    attribute: 'data-label-email',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.EMAIL;
    },
    group: 'LABEL',
    key: 'EMAIL'
  }, {
    attribute: 'data-label-phone',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.PHONE;
    },
    group: 'LABEL',
    key: 'PHONE'
  }, {
    attribute: 'data-label-inquiry',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.INQUIRY;
    },
    group: 'LABEL',
    key: 'INQUIRY'
  }, {
    attribute: 'data-label-text-message-consent',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.TEXT_MESSAGE_CONSENT;
    },
    group: 'LABEL',
    key: 'TEXT_MESSAGE_CONSENT'
  }, {
    attribute: 'data-label-text-message-consent-1',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.TEXT_MESSAGE_CONSENT_1;
    },
    group: 'LABEL',
    key: 'TEXT_MESSAGE_CONSENT_1'
  }, {
    attribute: 'data-label-text-message-consent-2',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.TEXT_MESSAGE_CONSENT_2;
    },
    group: 'LABEL',
    key: 'TEXT_MESSAGE_CONSENT_2'
  }, {
    attribute: 'data-label-privacy-policy',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.VIEW_PRIVACY_POLICY;
    },
    group: 'LABEL',
    key: 'VIEW_PRIVACY_POLICY'
  }, {
    attribute: 'data-view-terms-of-service',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.VIEW_TERMS_OF_SERVICE;
    },
    group: 'LABEL',
    key: 'VIEW_TERMS_OF_SERVICE'
  }, {
    attribute: 'data-and',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.LABELS.AND;
    },
    group: 'LABEL',
    key: 'AND'
  }];
  var TEXT = [{
    attribute: 'data-submit-button-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.SAVE_BUTTON_TEXT;
    },
    group: 'TEXT',
    key: 'SUBMIT_BUTTON'
  }, {
    attribute: 'data-appointment-scheduler-title-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.APPOINTMENT_SCHEDULER_TITLE_TEXT;
    },
    group: 'TEXT',
    key: 'APPOINTMENT_SCHEDULER_TITLE'
  }, {
    attribute: 'data-appointment-please-call-me-confirmation-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.OUR_OFFICE_WILL_CALL_YOU_TO_SCHEDULE_APPOINTMENT;
    },
    group: 'TEXT',
    key: 'OUR_OFFICE_WILL_CALL_YOU_TO_SCHEDULE_APPOINTMENT'
  }, {
    attribute: 'data-appointment-you-have-selected-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.YOU_HAVE_SELECTED;
    },
    group: 'TEXT',
    key: 'YOU_HAVE_SELECTED'
  }, {
    attribute: 'data-appointment-scheduler-change-appointment-button-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.APPOINTMENT_SCHEDULER_CHANGE_APPOINTMENT_TEXT;
    },
    group: 'TEXT',
    key: 'CHANGE_APPOINTMENT_BUTTON'
  }, {
    attribute: 'data-appointment-scheduler-completion-message-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.APPOINTMENT_SCHEDULER_SUCCESS_MESSAGE;
    },
    group: 'TEXT',
    key: 'APPOINTMENT_SCHEDULER_SUCCESS_MESSAGE'
  }, {
    attribute: 'data-appointment-scheduler-call-me-completion-message-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.APPOINTMENT_SCHEDULER_CALL_ME_SUCCESS_MESSAGE;
    },
    group: 'TEXT',
    key: 'APPOINTMENT_CALL_ME_SUCCESS_MESSAGE'
  }, {
    attribute: 'data-appointment-scheduler-description-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.APPOINTMENT_SCHEDULER_DESCRIPTION_TEXT;
    },
    group: 'TEXT',
    key: 'APPOINTMENT_SCHEDULER_DESCRIPTION'
  }, {
    attribute: 'data-appointment-scheduler-please-call-me-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.PLEASE_CALL_ME_TEXT;
    },
    group: 'TEXT',
    key: 'PLEASE_CALL_ME'
  }, {
    attribute: 'data-appointment-scheduler-unavailable-appointment-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.APPOINTMENT_SCHEDULER_UNAVAILABLE_APPOINTMENT_TEXT;
    },
    group: 'TEXT',
    key: 'APPOINTMENT_SCHEDULER_UNAVAILABLE_APPOINTMENT'
  }, {
    attribute: 'data-reset-warning-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.RESET_ALERT;
    },
    group: 'TEXT',
    key: 'RESET_ALERT'
  }, {
    attribute: 'data-reset-button-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.RESET_BUTTON_TEXT;
    },
    group: 'TEXT',
    key: 'RESET_BUTTON'
  }, {
    attribute: 'data-heading-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.HEADER;
    },
    group: 'TEXT',
    key: 'HEADER'
  }, {
    attribute: 'data-warning-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.WARNING_MESSAGE;
    },
    group: 'TEXT',
    key: 'WARNING'
  }, {
    attribute: 'data-description-text',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.DESCRIPTION;
    },
    group: 'TEXT',
    key: 'DESCRIPTION'
  }, {
    attribute: 'data-form-submission-success-title',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.SUBMISSION_SUCCESS_TITLE;
    },
    group: 'TEXT',
    key: 'SUBMISSION_SUCCESS_TITLE'
  }, {
    attribute: 'data-form-submission-success-message',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.SUBMISSION_SUCCESS_MESSAGE;
    },
    group: 'TEXT',
    key: 'SUBMISSION_SUCCESS_MESSAGE'
  }, {
    attribute: 'data-form-submission-error-message',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.TEXT.SUBMISSION_ERROR_MESSAGE;
    },
    group: 'TEXT',
    key: 'SUBMISSION_ERROR_MESSAGE'
  }];
  var PLACEHOLDERS = [{
    attribute: 'data-placeholder-first-name',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.PLACEHOLDERS.FIRST_NAME;
    },
    allowEmptyString: true,
    group: 'PLACEHOLDERS',
    key: 'FIRST_NAME'
  }, {
    attribute: 'data-placeholder-last-name',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.PLACEHOLDERS.LAST_NAME;
    },
    allowEmptyString: true,
    group: 'PLACEHOLDERS',
    key: 'LAST_NAME'
  }, {
    attribute: 'data-placeholder-email',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.PLACEHOLDERS.EMAIL;
    },
    allowEmptyString: true,
    group: 'PLACEHOLDERS',
    key: 'EMAIL'
  }, {
    attribute: 'data-placeholder-phone',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.PLACEHOLDERS.PHONE;
    },
    allowEmptyString: true,
    group: 'PLACEHOLDERS',
    key: 'PHONE'
  }, {
    attribute: 'data-placeholder-inquiry',
    type: 'overwrite',
    "default": function _default() {
      return CONSTANTS.PLACEHOLDERS.INQUIRY;
    },
    allowEmptyString: true,
    group: 'PLACEHOLDERS',
    key: 'INQUIRY'
  }];
  var SHOW = [{
    attribute: 'data-show-placeholders',
    type: 'boolean',
    "default": CONSTANTS.SHOW.PLACEHOLDERS,
    group: 'SHOW',
    key: 'PLACEHOLDERS'
  }, {
    attribute: 'data-show-appointment-scheduler',
    type: 'boolean',
    "default": CONSTANTS.SHOW.APPOINTMENT_SCHEDULER,
    group: 'SHOW',
    key: 'APPOINTMENT_SCHEDULER'
  }, {
    attribute: 'data-show-age-dropdown',
    type: 'boolean',
    "default": CONSTANTS.SHOW.AGE,
    group: 'SHOW',
    key: 'AGE'
  }, {
    attribute: 'data-show-appointment-scheduler-please-call-me',
    type: 'boolean',
    "default": CONSTANTS.SHOW.PLEASE_CALL_ME,
    group: 'SHOW',
    key: 'PLEASE_CALL_ME'
  }, {
    attribute: 'data-show-todays-appointments',
    type: 'boolean',
    "default": CONSTANTS.SHOW.TODAYS_APPOINTMENTS,
    group: 'SHOW',
    key: 'TODAYS_APPOINTMENTS'
  }, {
    attribute: 'data-show-reset-warning',
    type: 'boolean',
    "default": CONSTANTS.SHOW.RESET_ALERT,
    group: 'SHOW',
    key: 'RESET_ALERT'
  }, {
    attribute: 'data-show-warning',
    type: 'boolean',
    "default": CONSTANTS.SHOW.WARNING,
    group: 'SHOW',
    key: 'WARNING'
  }, {
    attribute: 'data-show-header',
    type: 'boolean',
    "default": CONSTANTS.SHOW.HEADER,
    group: 'SHOW',
    key: 'HEADER'
  }, {
    attribute: 'data-show-reset-button',
    type: 'boolean',
    "default": CONSTANTS.SHOW.RESET_BUTTON,
    group: 'SHOW',
    key: 'RESET_BUTTON'
  }, {
    attribute: 'data-show-inquiry-message',
    type: 'boolean',
    "default": CONSTANTS.SHOW.INQUIRY,
    group: 'SHOW',
    key: 'INQUIRY'
  }, {
    attribute: 'data-show-references',
    type: 'boolean',
    "default": CONSTANTS.SHOW.REFERENCE,
    group: 'SHOW',
    key: 'REFERENCE'
  }, {
    attribute: 'data-show-patient-status',
    type: 'boolean',
    "default": CONSTANTS.SHOW.PATIENT_STATUS,
    group: 'SHOW',
    key: 'PATIENT_STATUS'
  }, {
    attribute: 'data-show-services',
    type: 'boolean',
    "default": CONSTANTS.SHOW.SERVICES,
    group: 'SHOW',
    key: 'SERVICES'
  }, {
    attribute: 'data-show-map',
    type: 'boolean',
    "default": CONSTANTS.SHOW.GOOGLE_MAPS_LOCAL,
    group: 'SHOW',
    key: 'GOOGLE_MAPS_LOCAL'
  }, {
    attribute: 'data-show-default-location-only-on-map',
    type: 'boolean',
    "default": CONSTANTS.SHOW.DEFAULT_LOCATION_ON_MAP_ONLY_ON_MAP,
    group: 'SHOW',
    key: 'DEFAULT_LOCATION_ON_MAP_ONLY_ON_MAP'
  }, {
    attribute: 'data-show-locations-popover',
    type: 'boolean',
    "default": CONSTANTS.SHOW.LOCATIONS_POPOVER,
    group: 'SHOW',
    key: 'LOCATIONS_POPOVER'
  }];
  var REQUIREMENTS = [{
    attribute: 'data-require-patient-status',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.PATIENT_STATUS,
    group: 'REQUIREMENTS',
    key: 'PATIENT_STATUS'
  }, {
    attribute: 'data-require-appointment-scheduler',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.APPOINTMENT_SCHEDULER,
    group: 'REQUIREMENTS',
    key: 'APPOINTMENT_SCHEDULER'
  }, {
    attribute: 'data-require-age-dropdown',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.AGE,
    group: 'REQUIREMENTS',
    key: 'AGE'
  }, {
    attribute: 'data-require-locations',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.LOCATIONS,
    group: 'REQUIREMENTS',
    key: 'LOCATION'
  }, {
    attribute: 'data-require-services',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.SERVICES,
    group: 'REQUIREMENTS',
    key: 'SERVICES'
  }, {
    attribute: 'data-require-references',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.REFERENCES,
    group: 'REQUIREMENTS',
    key: 'REFERENCES'
  }, {
    attribute: 'data-require-first-name',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.FIRST_NAME,
    group: 'REQUIREMENTS',
    key: 'FIRST_NAME'
  }, {
    attribute: 'data-require-last-name',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.LAST_NAME,
    group: 'REQUIREMENTS',
    key: 'LAST_NAME'
  }, {
    attribute: 'data-require-phone',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.PHONE,
    group: 'REQUIREMENTS',
    key: 'PHONE'
  }, {
    attribute: 'data-require-email',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.EMAIL,
    group: 'REQUIREMENTS',
    key: 'EMAIL'
  }, {
    attribute: 'data-require-inquiry',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.INQUIRY,
    group: 'REQUIREMENTS',
    key: 'INQUIRY'
  }, {
    attribute: 'data-require-text-message-consent',
    type: 'boolean',
    "default": CONSTANTS.REQUIREMENTS.TEXT_MESSAGE_CONSENT,
    group: 'REQUIREMENTS',
    key: 'TEXT_MESSAGE_CONSENT'
  }];
  var VALIDATIONS = [{
    attribute: 'data-validate-email',
    type: 'boolean',
    "default": CONSTANTS.VALIDATIONS.EMAIL,
    group: 'VALIDATIONS',
    key: 'EMAIL'
  }, {
    attribute: 'data-validate-phone',
    type: 'boolean',
    "default": CONSTANTS.VALIDATIONS.PHONE,
    group: 'VALIDATIONS',
    key: 'PHONE'
  }];
  var SETTINGS = [{
    attribute: 'data-source',
    type: 'overwrite',
    "default": CONSTANTS.SETTINGS.SOURCE,
    group: 'SETTINGS',
    key: 'SOURCE'
  }, {
    attribute: 'data-remove-url-appointment-message',
    type: 'boolean',
    "default": CONSTANTS.SETTINGS.REMOVE_URL_APPOINTMENT_MESSAGE,
    group: 'SETTINGS',
    key: 'REMOVE_URL_APPOINTMENT_MESSAGE'
  }, {
    attribute: 'data-appointment-scheduler-no-weekends',
    type: 'boolean',
    "default": CONSTANTS.SETTINGS.NO_WEEKENDS,
    group: 'SETTINGS',
    key: 'NO_WEEKENDS'
  }, {
    attribute: 'data-language',
    type: 'overwrite',
    "default": CONSTANTS.SETTINGS.LANGUAGE,
    group: 'SETTINGS',
    key: 'LANGUAGE'
  }, {
    attribute: 'data-language-options',
    type: 'overwrite',
    "default": CONSTANTS.SETTINGS.LANGUAGE_OPTIONS,
    group: 'SETTINGS',
    key: 'LANGUAGE_OPTIONS'
  }, {
    attribute: 'data-map-marker-click-changes-location-immediately',
    type: 'boolean',
    "default": CONSTANTS.SETTINGS.MAP_IMMEDIATE_CHANGE_MODE,
    group: 'SETTINGS',
    key: 'MAP_IMMEDIATE_CHANGE_MODE'
  }, {
    attribute: 'data-submission-redirect-url',
    type: 'overwrite',
    "default": CONSTANTS.SETTINGS.SUBMISSION_REDIRECT_URL,
    group: 'SETTINGS',
    key: 'SUBMISSION_REDIRECT_URL'
  }, {
    attribute: 'data-hide-locations',
    type: 'boolean',
    "default": CONSTANTS.SETTINGS.HIDE_LOCATIONS,
    group: 'SETTINGS',
    key: 'HIDE_LOCATIONS'
  }, {
    attribute: 'data-hide-location-options',
    type: 'overwrite',
    "default": CONSTANTS.SETTINGS.HIDE_LOCATION_OPTIONS,
    group: 'SETTINGS',
    key: 'HIDE_LOCATION_OPTIONS'
  }, {
    attribute: 'data-default-patient-status',
    type: 'overwrite',
    "default": CONSTANTS.SETTINGS.DEFAULT_PATIENT_STATUS,
    group: 'SETTINGS',
    key: 'DEFAULT_PATIENT_STATUS'
  }, {
    attribute: 'data-default-location',
    type: 'overwrite',
    "default": CONSTANTS.SETTINGS.DEFAULT_LOCATION,
    group: 'SETTINGS',
    key: 'DEFAULT_LOCATION'
  }, {
    attribute: 'data-no-default-location',
    type: 'boolean',
    "default": CONSTANTS.SETTINGS.NO_DEFAULT_LOCATION,
    group: 'SETTINGS',
    key: 'NO_DEFAULT_LOCATION'
  }, {
    attribute: 'data-debug-mode',
    type: 'overwrite',
    "default": function _default() {
      return false;
    },
    group: 'SETTINGS',
    key: 'DEBUG_MODE'
  }, {
    attribute: 'data-default-css-library',
    type: 'overwrite',
    manual: true,
    "default": CONSTANTS.SETTINGS.DEFAULT_CSS_LIBRARY,
    groups: 'SETTINGS',
    key: 'DEFAULT_CSS_LIBRARY'
  }]; //==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-//

  returnArray = returnArray.concat(LABEL).concat(TEXT).concat(PLACEHOLDERS).concat(SHOW).concat(SETTINGS).concat(VALIDATIONS).concat(CLASSES).concat(REQUIREMENTS); //==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-//

  return returnArray;
}();

window.$wave_cookies = function () {
  var exports = {};

  function get(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }

  exports.get = get;
  return exports;
}();

window.$wave_u$http = function () {
  var exports = {};
  var $cookies = window.$wave_cookies;
  var $sessionStorage = {}; //just setting this like this for now

  var prepare_request = {};

  function getFileEnding(string) {
    var re = /(?:\.([^.]+))?$/;
    var ext = re.exec(string)[1];
    return ext;
  }

  function isHtml(string) {
    return /[\S\s]*<html[\S\s]*\>[\S\s]*<\/html[\S\s]*\>[\S\s]*/.test(string);
  }

  function serializeQueryParams(obj) {
    if (obj) {
      var str = [];

      for (var p in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
      }

      return '?' + str.join('&');
    } else {
      return '';
    }
  }

  function joinUrlWithQuery(url, query) {
    return url + serializeQueryParams(query);
  }

  function $http(params) {
    return new Promise(function (resolve, reject) {
      var expect_html = params.expect_html === true;
      delete params.expect_html;
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          var returnObj = {
            status: request.status
          };
          var url = request.responseURL;
          returnObj.file_type = getFileEnding(url);
          var leaveAsString = ['html'];
          var is_html = leaveAsString.indexOf(returnObj.file_type) > -1 || isHtml(request.responseText);

          if (is_html) {
            returnObj.data = request.responseText;
          } else {
            try {
              returnObj.data = request.status !== 204 ? JSON.parse(request.responseText) : '';
            } catch (e) {
              returnObj.data = request.responseText;
            }
          }

          returnObj.request_object = params;

          if (request.status === 200 || request.status === 204) {
            if (expect_html === false && is_html === true) {
              returnObj.status = 400;
              reject(returnObj);
            } else {
              resolve(returnObj);
            }
          } else {
            reject(returnObj);
          }
        }
      };

      request.open(params.method, params.url, true); // true for asynchronous

      params.data ? request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8') : null;

      if (params.headers && Object.keys(params.headers).length) {
        Object.keys(params.headers).forEach(function (key) {
          request.setRequestHeader(key, params.headers[key]);
        });
      }

      var data = params.data ? params.data : null;
      request.send(JSON.stringify(data));
    });
  }

  function u$http(params) {
    return new Promise(function (resolve, reject) {
      if (params) {
        //Checks to see if the params object is not empty;
        new Promise(function (next) {
          if (!params.url) {
            //url is required
            reject({
              status: 400,
              message: 'no url passed'
            });
          } else if (!params.method) {
            //method is required
            reject({
              status: 400,
              message: 'no method passed'
            });
          } else {
            //if both exist, send the params object to the next section
            next({
              url: params.url,
              expect_html: params.expect_html || false,
              data: !!params.body ? params.body : params.data,
              method: params.method.toUpperCase(),
              params: params.params
            });
          }
        }).then(function (httpParams) {
          //Checks to see if there is data
          return new Promise(function (next) {
            params.responseType = params.responseType != null ? params.responseType : undefined;
            params.dataType = params.dataType != null ? params.dataType : undefined;
            params.processData = params.processData != null ? params.processData : undefined;

            if (params.data && httpParams.method === 'DELETE') {
              reject({
                status: 400,
                message: 'Data cannot be passed with a delete request.'
              });
            } else if (params.data && httpParams.method !== 'GET') {
              //if there is data and the method is not 'GET', then add data and send
              httpParams.data = params.data;
              next(httpParams);
            } else {
              //send the params to the next section
              next(httpParams);
            }
          });
        }).then(function (httpParams) {
          return new Promise(function (next) {
            if (!httpParams.headers) {
              httpParams.headers = {};
            }

            if (httpParams.url.indexOf('/api/v1/') > -1) {
              //checks to see if token is required
              var token = window.localStorage.getItem('TOKEN');

              if (window.localStorage && (token || window.localStorage.user || window.localStorage.token)) {
                //Checks to see that the user.token object exists
                if (!token) {
                  token = window.localStorage.token ? window.localStorage.token : JSON.parse(window.localStorage.user).token;
                }

                httpParams.headers = {
                  'x-access-token': token
                };
                next(httpParams);
              } else if (params.admin) {
                httpParams.headers = {
                  'x-access-token': params.admin.token
                };
                next(httpParams);
              } else {
                //throws an error if it doesn't exist
                reject({
                  status: 400,
                  message: 'No user.token found'
                });
              }
            } else {
              //not required, send the current params to the next section
              next(httpParams);
            }
          });
        }).then(function (httpParams) {
          return new Promise(function (next) {
            //If there are any other special headers we need to add
            //Put them here
            if (params.headers) {
              Object.keys(params.headers).forEach(function (key) {
                httpParams.headers[key] = params.headers[key];
              });
            } //If we need to specify a response type (like we do for file download)
            //It'll map it over here


            if (params.responseType) {
              httpParams.responseType = params.responseType;
            }

            next(httpParams);
          });
        }).then(function (httpParams) {
          //makes the http request and returns the response/error
          httpParams.url = joinUrlWithQuery(httpParams.url, httpParams.params);
          $http(httpParams).then(function (response) {
            resolve(response);
          }, function (error) {
            reject(error);
          });
        });
      } else {
        //the params object doesn't exist.
        reject({
          status: 400,
          message: 'no params passed in http function'
        });
      }
    });
  }

  exports.http = u$http;
  return exports;
}();

window.$wave_UtilityService = function () {
  var exports = {};
  /**
   * @description this ensures that an item is undefined
   *
   * @param {*} item - item to be tested
   * @returns {boolean}
   */

  function isUndefined(item) {
    return typeof item === 'undefined';
  }

  exports.isUndefined = isUndefined;
  /**
   * @description this ensures that an item is null
   *
   * @param {*} item - item to be tested
   * @returns {boolean}
   */

  function isNull(item) {
    return item === null;
  }

  exports.isNull = isNull;
  /**
   *@description this ensures an item is a date, or a valid date string
   *
   * @param {*} item - item to be tested
   * @param {boolean=} [allowString=false] - allow a user to test if an item is a string and a valid date object
   * @returns {boolean}
   */

  function isDate(item, allowString) {
    var isNotInvalidType = !isUndefined(item) && !isNull(item) && !isNumeric(item) && !isBoolean(item) && !isArray(item);
    var stringAllowance = allowString !== true ? !isString(item) : true;

    if (isNotInvalidType && stringAllowance) {
      if (allowString === true) {
        item = new Date(item);
      }

      return item instanceof Date === true && item.toString() !== 'Invalid Date';
    } else {
      return false;
    }
  }

  exports.isDate = isDate;
  /**
   * @description this ensures that an item is explicitly true or false
   *
   * @param {*} item - item to be tested
   * @param {boolean=} [allowString=false] - allow 'true' and 'false' to return true
   * @param {*=} [equalityVal=null] - (true/false) if equalityVal is present, it will check to see if the value is true or false
   * @returns {boolean}
   */

  function isBoolean(item, allowString, equalityVal) {
    var itemIsBoolean = item === true || item === false;
    var itemIsStringBoolean = item === 'true' || item === 'false';

    if (equalityVal && equalityVal === 'true' || equalityVal === true || equalityVal === false || equalityVal === false) {
      var bothAreTrue = (item === true || item === 'true') && (equalityVal === true || equalityVal === 'true');
      var bothAreFalse = (item === false || item === 'false') && (equalityVal === false || equalityVal === 'false');
      var equalityValCheck = bothAreFalse || bothAreTrue;
      return (allowString === true ? itemIsBoolean || itemIsStringBoolean : itemIsBoolean) && equalityValCheck;
    } else {
      return allowString === true ? itemIsBoolean || itemIsStringBoolean : itemIsBoolean;
    }
  }

  exports.isBoolean = isBoolean;
  /**
   * @description this ensures that an item is an integer (a number without decimals)
   *
   * @param {*} item - item to be tested
   * @param {boolean=} [withoutTypeConversion=false] - require that the item is not a string
   * @returns {boolean}
   */

  function isInteger(item, withoutTypeConversion) {
    var itemIsInteger = !isUndefined(item) && !isNull(item) && !isNaN(item) && parseInt(Number(item)) == item && !isNaN(parseInt(item, 10)); // eslint-disable-line

    var isNotString = withoutTypeConversion === true ? itemIsInteger === true && !isString(item) : true;
    return itemIsInteger === true && isNotString === true;
  }

  exports.isInteger = isInteger;
  /**
   * @description this ensures than an item is a number (with or without decimals)
   *
   * @param {*} item - item to be tested
   * @param {boolean=} [withoutTypeConversion=false] - require that the item is not a string
   * @returns {boolean}
   */

  function isNumeric(item, withoutTypeConversion) {
    var itemIsNumeric = !isUndefined(item) && !isNull(item) && !isNaN(parseFloat(item)) && isFinite(item);
    var isNotString = withoutTypeConversion === true ? itemIsNumeric === true && !isString(item) : true;
    return itemIsNumeric === true && isNotString === true;
  }

  exports.isNumeric = isNumeric;
  /**
   * @description this ensures that an item is a function
   *
   * @param {*} item - item to be tested
   * @returns {boolean}
   */

  function isFunction(item) {
    return !isUndefined(item) && !isNull(item) && typeof item === 'function';
  }

  exports.isFunction = isFunction;
  /**
   * @description this ensures that an item is a string
   *
   * @param {*} item - item to be tested
   * @param {boolean=} [requireNotEmpty=false] - require that the string has a length of at least one
   * @returns {boolean}
   */

  function isString(item, requireNotEmpty) {
    var itemIsString = !isUndefined(item) && !isNull(item) && typeof item === 'string';
    var isNotEmpty = requireNotEmpty === true ? itemIsString === true && item.length > 0 : true;
    return itemIsString === true && isNotEmpty === true;
  }

  exports.isString = isString;
  /**
   * @description this ensures than an item is an object
   *
   * @param {*} item - item to be tested
   * @param {boolean=} [requireNotEmpty=false] - require that the object has at least one key
   * @returns {boolean}
   */

  function isObject(item, requireNotEmpty) {
    var itemIsObject = !isUndefined(item) && !isNull(item) && !isDate(item) && _typeof(item) === 'object' && !isFunction(item) && Array.isArray(item) === false;
    var isNotEmpty = requireNotEmpty === true ? itemIsObject === true && Object.keys(item).length > 0 : true;
    return itemIsObject === true && isNotEmpty === true;
  }

  exports.isObject = isObject;
  /**
   * @description this ensures than an item is an array
   *
   * @param {*} item - item to be tested
   * @param {boolean=} [requireNotEmpty=false] - require that the array has a length of at least one
   * @returns {boolean}
   */

  function isArray(item, requireNotEmpty) {
    var isArray = !isUndefined(item) && !isNull(item) && Array.isArray(item);
    var isNotEmpty = requireNotEmpty === true ? isArray === true && item.length > 0 : true;
    return isArray === true && isNotEmpty === true;
  }

  exports.isArray = isArray;
  /**
   * @description this ensures that an item is an array or object and ensures that the item is not an empty version of those types
   *
   * @param {*} item
   * @param  {boolean=} [canBeEmpty=false] - allow the item (array or object) to be an empty array or object
   * @returns {boolean}
   */

  function isJsonItem(item, canBeEmpty) {
    return isArray(item, canBeEmpty !== true) || isObject(item, canBeEmpty !== true);
  }

  exports.isJsonItem = isJsonItem;
  /**
   * @description this ensures that an item is an array, boolean, object, string or number and ensures that the item is not an empty version of those types
   *
   * @param {*} item
   * @param {boolean=} [canBeEmpty=false] - allow the item (array, object, or string) to be empty versions of that item
   * @returns {boolean}
   */

  function isValidResponse(item, canBeEmpty) {
    return isArray(item, canBeEmpty !== true) || isDate(item) || isBoolean(item) || isObject(item, canBeEmpty !== true) || isString(item, canBeEmpty !== true) || isNumeric(item);
  }

  exports.isValidResponse = isValidResponse;
  /**
   *
   * @param {*} item
   * @param {boolean=} [canBeEmpty=false] - allow the item to be a string or array
   * @returns {boolean}
   */

  function isStringOrArray(item, canBeEmpty) {
    return isString(item, canBeEmpty) || isArray(item, canBeEmpty);
  }

  exports.isStringOrArray = isStringOrArray;
  /**
   *
   * @param {*} item
   * @param {boolean=} [stringCanBeEmpty=false] - allow an empty string to pass
   * @param {boolean=} [booleanAllowString=false] - allow a string 'true' or 'false' to pass
   * @param {boolean=} [booleanEqualityVal=null] - require the item to be equal to a true or false value (or as string)
   * @returns {boolean}
   */

  function isStringOrBoolean(item, stringCanBeEmpty, booleanAllowString, booleanEqualityVal) {
    return isString(item, stringCanBeEmpty) || isBoolean(item, booleanAllowString, booleanEqualityVal);
  }

  exports.isStringOrBoolean = isStringOrBoolean;
  /**
   *
   * @param {String} value
   * @returns {boolean}
   */

  function isValidEmail(value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(getSanitizedEmail(value));
  }

  exports.isValidEmail = isValidEmail;
  /**
   *
   * @param value
   * @returns {string}
   */

  function getSanitizedEmail(value) {
    return value.trim().toLowerCase();
  }

  exports.getSanitizedEmail = getSanitizedEmail;
  /**
   *
   * @param {String} value
   * @returns {*}
   */

  function getSanitizedPhoneNumber(value) {
    return value.replace(/[^0-9]/g, '').trim();
  }

  exports.getSanitizedPhoneNumber = getSanitizedPhoneNumber;
  /**
   *
   * @param {String} value
   * @returns {boolean}
   */

  function isValidPhone(value) {
    console.log(value);

    if (isString(value, true)) {
      var new_phone = getSanitizedPhoneNumber(value);
      console.log(new_phone);
      return new_phone.length === 10;
    } else {
      console.log('is not string');
      return false;
    }
  }

  exports.isValidPhone = isValidPhone;
  /**
   *
   * @param {*} value
   * @returns {*}
   */

  function extractValue(value) {
    if (typeof value === 'function') {
      return value();
    } else {
      return value;
    }
  }

  exports.extractValue = extractValue;
  return exports;
}();

window.$wave_DataService = function () {
  var exports = {};
  var u$http = window.$wave_u$http;
  var UtilityService = window.$wave_UtilityService;
  var DATA_SERVICE_CONFIG = {
    URLS: {
      STANDARD: {
        DOCTOR_DATA: 'https://central.waveortho.com/wave-central/api/v3/getInquiryFormData.php',
        SAVE_APPOINTMENT: 'https://central.waveortho.com/wave-central/api/appt_scheduler.php',
        SAVE_MESSAGE: 'https://central.waveortho.com/wave-central/api/inquiry.php'
      },
      LOCAL_SERVER: {
        DOCTOR_DATA: '/wave-central/api/v3/getInquiryFormData.php',
        SAVE_APPOINTMENT: '/wave-central/api/appt_scheduler.php',
        SAVE_MESSAGE: '/wave-central/api/inquiry.php'
      }
    }
  };

  function getCurrentBrowser() {
    var browserName = undefined;

    if (!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
      browserName = 'Opera';
    } else if (typeof InstallTrigger !== 'undefined') {
      browserName = 'Firefox';
    } else if (/constructor/i.test(window.HTMLElement) || function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification)) {
      browserName = 'Safari';
    } else if (
    /*@cc_on!@*/
    false || !!document.documentMode) {
      browserName = 'Internet Explorer';
    } else if (!isIE && !!window.StyleMedia) {
      browserName = 'Edge';
    } else if (!!window.chrome && !!window.chrome.webstore) {
      browserName = 'Chrome';
    }

    return browserName;
  }

  function getDeviceType() {
    var type = 'Desktop';

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      type = 'Mobile';
    }

    return type;
  }

  function isDemoMode() {
    return !!(WaveInquiryForm && WaveInquiryForm.demoMode && WaveInquiryForm.demoMode === true);
  }

  function isLocalServerMode() {
    return !!(isDemoMode() && window.$wave_FORM_ATTRIBUTES['data-local-server-mode'] === 'true');
  }

  function isDoNotSubmitMode() {
    return !!(window.$wave_FORM_ATTRIBUTES['data-do-not-submit'] === 'true');
  }
  /**
   *
   * @param {'post' | 'get'} method
   * @returns {boolean}
   */


  function dataShouldBeSubmittedToServer(method) {
    var validMethods = ['post', 'get'];

    if (!!method && validMethods.indexOf(method) > -1) {
      if (isDoNotSubmitMode() === true && method === 'get') {
        return true;
      } else if (isDoNotSubmitMode() === true) {
        return false;
      } else {
        if (isLocalServerMode() === true) {
          return true;
        } else {
          if (isDemoMode()) {
            return false;
          } else {
            return true;
          }
        }
      }
    } else {
      throw Error('method is required: ' + JSON.stringify(validMethods));
    }
  }

  function getUrl(name) {
    var urlType = isLocalServerMode() ? 'LOCAL_SERVER' : 'STANDARD';
    return DATA_SERVICE_CONFIG.URLS[urlType][name];
  }

  function saveToDatabase(finalSaveObject, doctorID, options) {
    options = UtilityService.isObject(options) ? options : {};
    finalSaveObject.clientNumber = doctorID;
    finalSaveObject.source = !!options.source ? options.source : '';
    finalSaveObject.urlParameters = decodeURI(location.search.substring(1));
    finalSaveObject.fullUrl = decodeURI(window.location.href);
    finalSaveObject.language = options.language || '';
    finalSaveObject.formVersion = options.formVersion || '';

    if (dataShouldBeSubmittedToServer('post')) {
      return u$http.http({
        method: 'POST',
        url: getUrl('SAVE_MESSAGE'),
        body: finalSaveObject
      });
    } else {
      return new Promise(function (resolve) {
        resolve({
          status: 200,
          message: 'Demo successfully submitted'
        });
      });
    }
  }

  exports.saveToDatabase = saveToDatabase;

  function updateAppointmentData(Appt_ID, options) {
    options = UtilityService.isObject(options) ? options : {};
    var body = {
      Appt_ID: Appt_ID
    };

    if (dataShouldBeSubmittedToServer('post')) {
      return u$http.http({
        method: 'POST',
        url: getUrl('SAVE_APPOINTMENT'),
        body: body
      });
    } else {
      return new Promise(function (resolve) {
        resolve({
          status: 200,
          message: 'Demo appointment submitted'
        });
      });
    }
  }

  exports.updateAppointmentData = updateAppointmentData;

  function getDoctorData(doctorID) {
    if (dataShouldBeSubmittedToServer('get')) {
      return u$http.http({
        method: 'POST',
        url: getUrl('DOCTOR_DATA'),
        body: {
          clientNumber: doctorID
        },
        headers: {
          'USERNAME': null,
          'PASSWORD': null
        }
      });
    } else {
      return new Promise(function (resolve) {
        resolve({
          status: 200,
          message: 'Demo successfully submitted',
          data: [{}]
        });
      });
    }
  }

  exports.getDoctorData = getDoctorData;
  return exports;
}();

window.$wave_HTMLService = function () {
  var exports = {};
  var UtilityService = window.$wave_UtilityService;

  function extractAttributesFromElement(element) {
    var attributesArray = [].slice.call(element.attributes);
    var returnObj = {};
    attributesArray.forEach(function (attribute) {
      var key = attribute.nodeName;
      var value = attribute.nodeValue;
      returnObj[key] = value;
    });
    return returnObj;
  }

  exports.extractAttributesFromElement = extractAttributesFromElement;

  function isEmpty(element) {
    var htmlString = element.innerHTML;
    htmlString = htmlString.trim ? htmlString.trim() : htmlString.replace(/^\s+/, ''); // eslint-disable-next-line

    return htmlString == '';
  }

  exports.isEmpty = isEmpty;

  function getArrayFromNodeList(list) {
    return Array.prototype.slice.call(list);
  }

  exports.getArrayFromNodeList = getArrayFromNodeList;

  function emptyElement(element) {
    element.innerHTML = '';
  }

  exports.emptyElement = emptyElement;

  function createElement(items, attributes, children, options) {
    var html = '';
    options = UtilityService.isObject(options) ? options : {};
    items = Array.isArray(items) ? items : [items];
    items.forEach(function (item, i) {
      var itemTag;
      var itemAttributes;
      var itemChildren;
      var itemOptions = {};

      if (!!attributes || !!children && _typeof(items) !== 'object') {
        itemTag = item;
        itemAttributes = attributes;
        itemChildren = children;
      } else {
        itemTag = item.tag;
        itemAttributes = item.attributes;
        itemChildren = item.children;
        itemOptions = UtilityService.isObject(item.options) ? item.options : {};
      }

      var newHTML = createElementObject(itemTag, itemAttributes, itemChildren);

      if (!newHTML) {
        console.log(itemTag);
        console.log(itemAttributes);
        console.log(itemChildren);
        console.log(newHTML);
      }

      if (items.length > 1 || itemOptions.htmlToString === true) {
        html = html + newHTML.outerHTML;
      } else {
        html = newHTML;
      }
    });
    return html;
  }

  exports.createElement = createElement;

  function generateValue(value) {
    if (UtilityService.isArray(value, true)) {
      value = createElement(value);
    } else if (UtilityService.isJsonItem(value, true)) {
      value = JSON.stringify(value);
    } else if (UtilityService.isNull(value) || UtilityService.isUndefined(value)) {
      value = '';
    } else if (UtilityService.isFunction(value)) {
      value = value();
    }

    return value;
  }

  function createElementObject(tag, attributes, children) {
    attributes = UtilityService.isObject(attributes) ? attributes : {};
    var element;

    if (UtilityService.isArray(children, true)) {
      children = createElement(children);
    } else if (UtilityService.isJsonItem(children, true)) {
      children = JSON.stringify(children);
    } else if (UtilityService.isNull(children) || UtilityService.isUndefined(children)) {
      children = '';
    }

    if (tag) {
      element = document.createElement(tag);
      var attributeNames = Object.keys(attributes);
      attributeNames.forEach(function (v, i) {
        var attributeValue = generateValue(attributes[v]);
        element.setAttribute(v, attributeValue);
      });
      element.innerHTML = children;
    }

    return element;
  }

  exports.createElementObject = createElementObject;

  function insertElement(element, targetID, method) {
    var validMethods = ['append', 'override'];
    method = UtilityService.isString(method, true) && validMethods.indexOf(method) > -1 ? method : 'append';
    var targetElement = document.getElementById(targetID);

    if (targetElement) {
      if (method === 'append') {
        targetElement.appendChild(element);
      } else if (method === 'override') {
        targetElement.innerHTML = element;
      }
    } else {
      console.log('invalid id: ' + targetID);
    }
  }

  exports.insertElement = insertElement;

  function extractUrlParameters(url) {
    if (url && url.indexOf('?') > -1) {
      var search = url.substring(url.indexOf('?') + 1, url.length);
      var decodedSearch = decodeURI(search);
      var options = decodedSearch.split('&');
      var parameterObject = {};
      options.forEach(function (optionObj) {
        var valueSplit = optionObj.split('=');
        var key = valueSplit[0];
        var value = valueSplit[1].split('%2C').join(',');
        parameterObject[key] = value;
      });
      return parameterObject;
    } else {
      return {};
    }
  }

  exports.extractUrlParameters = extractUrlParameters;

  function objectToUrlParameters(params) {
    return Object.entries(params).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      return !!val;
    }).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          val = _ref4[1];

      return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(val));
    }).join('&');
  }

  exports.objectToUrlParameters = objectToUrlParameters;
  return exports;
}();

window.$wave_FormService = function () {
  var exports = {};
  var HTMLService = window.$wave_HTMLService;
  var UtilityService = window.$wave_UtilityService;
  /**
   *
   * @param list
   * @param {Object} [options]
   * @param {Object} [options.keys]
   * @param {String} [options.keys.id]
   * @param {String} [options.keys.text]
   * @param {Boolean} [options.noDefault]
   * @returns {string}
   */

  function generateOptions(list, options) {
    options = UtilityService.isObject(options) ? options : {};
    options.keys = UtilityService.isObject(options.keys) ? options.keys : {
      id: 'value',
      text: 'text'
    };

    if (UtilityService.isFunction(list)) {
      list = list();
    }

    list = UtilityService.isArray(list) ? list : [];
    var defaultOptionPlaceholder = '<option disabled></option>';

    if (options.noDefault === true) {
      defaultOptionPlaceholder = '<option disabled selected></option>';
    }

    return [defaultOptionPlaceholder].concat(list.map(function (value) {
      var text = value;
      var id = value;

      if (UtilityService.isObject(value)) {
        text = value[options.keys.text];
        id = value[options.keys.id];
      }

      return "\n                <option value=\"".concat(id, "\">").concat(text, "</option>\n            ");
    })).join('');
  }

  exports.generateOptions = generateOptions;
  /**
   *
   * @param list
   * @param {Object} [options]
   * @param {Object} [options.keys]
   * @param {String} [options.keys.id]
   * @param {String} [options.keys.text]
   * @param {Boolean} [options.noDefault]
   * @returns {string}
   */

  function generateOptionsList(list, options) {
    options = UtilityService.isObject(options) ? options : {};
    options.keys = UtilityService.isObject(options.keys) ? options.keys : {
      id: 'value',
      text: 'text'
    };

    if (UtilityService.isFunction(list)) {
      list = list();
    }

    list = UtilityService.isArray(list) ? list : [];
    return list.map(function (value) {
      var text = value;
      var id = value;

      if (UtilityService.isObject(value)) {
        text = value[options.keys.text];
        id = value[options.keys.id];
      }

      return "<tr><td data-value='".concat(id, "' onclick='window.$wave_action_locationSelected(event)' class='popover-locations-list'>").concat(text, "</td></tr>");
    }).join('');
  }

  exports.generateOptionsList = generateOptionsList;
  /**
   *
   * @param placeholder
   * @param value
   * @param {{dataMapID: String, valueKey: [String]}} options
   * @returns {string}
   */

  function generateTextInput(placeholder, value, options) {
    options = UtilityService.isObject(options) ? options : {};
    var dataMapID = options.dataMapID;

    if (dataMapID) {
      var defaultClassName = $wave_CONFIG.CLASSES.FORM_INPUT;
      var className = defaultClassName + ' wave-input-select-textarea-item';
      var type = options.type === 'textarea' ? 'textarea' : 'text';

      if (UtilityService.isFunction(placeholder)) {
        placeholder = placeholder();
      }

      if (type === 'textarea') {
        return "\n                    <textarea rows=\"3\" placeholder=\"".concat(placeholder, "\" class=\"").concat(className, "\" onchange=\"window.$wave_action_inputChanged(event)\" data-map-id=\"").concat(dataMapID, "\"></textarea>\n                ");
      } else {
        return "\n                    <input type=\"text\" placeholder=\"".concat(placeholder, "\" class=\"").concat(className, "\" onchange=\"window.$wave_action_inputChanged(event)\" data-value-key=\"").concat(options.valueKey, "\" data-map-id=\"").concat(dataMapID, "\">\n                ");
      }
    } else {
      throw Error('dataMapID is required as a value in the options object');
    }
  }

  exports.generateTextInput = generateTextInput;
  /**
   *
   * @param optionList
   * @param {{dataMapID: String}} options
   * @returns {*}
   */

  function generateSelectInput(optionList, options) {
    options = UtilityService.isObject(options) ? options : {};
    var dataMapID = options.dataMapID;

    if (dataMapID) {
      var defaultClassName = $wave_CONFIG.CLASSES.FORM_INPUT;
      var className = defaultClassName + ' wave-input-select-textarea-item';
      return "\n            <select class=\"".concat(className, "\" onchange=\"window.$wave_action_inputChanged(event)\" data-map-id=\"").concat(dataMapID, "\">\n                ").concat(optionList, "\n            </select>\n        ");
    } else {
      throw Error('dataMapID is required as a value in the options object');
    }
  }

  exports.generateSelectInput = generateSelectInput;
  /**
   *
   * @param {{dataMapID: String}} options
   * @returns {*}
   */

  function generateCheckboxInput(text, required, options) {
    options = UtilityService.isObject(options) ? options : {};
    var dataMapID = options.dataMapID;
    var defaultLabelClassName = '';
    var defaultRequiredClassName = '';

    if ($wave_CONFIG) {
      defaultLabelClassName = $wave_CONFIG.CLASSES.CHECKBOX_LABEL;
      defaultRequiredClassName = $wave_CONFIG.CLASSES.INPUT_LABEL_REQUIRED;
      ;
    }

    if (UtilityService.isFunction(required)) {
      required = required();
    }

    if (UtilityService.isFunction(text)) {
      text = text();
    }

    if (dataMapID) {
      var defaultClassName = $wave_CONFIG.CLASSES.FORM_INPUT;
      var className = 'wave-input-checkbox-item';
      var input = "\n            <input type=\"checkbox\" class=\"".concat(className, "\" onchange=\"window.$wave_action_inputChanged(event)\" data-map-id=\"").concat(dataMapID, "\" />\n        ");
      var label = "\n        <label class=\"".concat(defaultLabelClassName, "\">").concat(text, "</label>\n        ");
      return [input, label].join('\r\n');
    } else {
      throw Error('dataMapID is required as a value in the options object');
    }
  }

  exports.generateCheckboxInput = generateCheckboxInput;
  /**
   *
   * @param optionList
   * @param {{dataMapID: String}} options
   * @returns {*}
   */

  function generateLocationsButtonAndPopover(optionList, options) {
    options = UtilityService.isObject(options) ? options : {};
    var dataMapID = options.dataMapID;

    if (dataMapID) {
      var popoverContainer = HTMLService.createElement('div', {
        id: 'popover-container',
        style: 'display: none'
      }, optionList);
      var locationsList = HTMLService.createElement('table', {
        id: 'popover-content'
      }, optionList);
      popoverContainer.appendChild(locationsList);
      document.body.appendChild(popoverContainer);
      return '<a tabindex="0" role="button" id="popover-button" class="btn btn-primary" data-bs-toggle="popover" data-bs-placement="right" data-bs-trigger="manual" onclick="window.$wave_action_showPopover(event)">Select a Location</a>';
    } else {
      throw Error('dataMapID is required as a value in the options object');
    }
  }

  exports.generateLocationsButtonAndPopover = generateLocationsButtonAndPopover;

  function generateLabel(text, required, options) {
    options = UtilityService.isObject(options) ? options : {};
    var defaultLabelClassName = '';
    var defaultRequiredClassName = '';

    if ($wave_CONFIG) {
      defaultLabelClassName = $wave_CONFIG.CLASSES.INPUT_LABEL;
      defaultRequiredClassName = $wave_CONFIG.CLASSES.INPUT_LABEL_REQUIRED;
    }

    if (UtilityService.isFunction(required)) {
      required = required();
    }

    if (UtilityService.isFunction(text)) {
      text = text();
    }

    return "\n            <label class=\"".concat(defaultLabelClassName, "\">\n                <span>").concat(text, "</span>\n                <sup title=\"required\" class=\"").concat(defaultRequiredClassName, "\" style=\"display: ").concat(required ? 'inherit' : 'none', "\">&#42;</sup>\n            </label>\n        ");
  }

  exports.generateLabel = generateLabel;

  function generateMessage() {
    var defaultClassName = $wave_CONFIG.CLASSES.ERROR_MESSAGE;
    return "\n            <p class=\"".concat(defaultClassName, "\">\n            \n            </p>\n        ");
  }

  exports.generateMessage = generateMessage;
  return exports;
}();

window.$wave_APPOINTMENT_SCHEDULER = function () {
  var exports = {};
  var VariableUtilityService = window.$wave_UtilityService;
  var HTMLService = window.$wave_HTMLService;
  var FormService = window.$wave_FormService;
  var u$http = window.$wave_u$http;
  var CONSTANTS = window.$wave_CONSTANTS;
  var TABLE_CONFIG = undefined;
  var APPT_TABLE_CACHE = {
    TOTAL_DAYS_TO_BE_SHOWN: 5,
    START_TIME: '09:00',
    END_TIME: '17:00',
    INCREMENT: 60
  };
  var EXAM_SCHEDULER_CONFIG = {
    CALL_IN_PROGRESS: false
  }; // let $wave_FORM_ATTRIBUTES = window.$wave_FORM_ATTRIBUTES;
  // let $wave_FORM_DATA_MAP = window.$wave_FORM_DATA_MAP;
  // let $wave_CONFIG = window.$wave_CONFIG;
  //==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-//

  function getConfig() {
    return TABLE_CONFIG;
  }

  function setConfig(config) {
    TABLE_CONFIG = config;
  }

  function changeDateArrowClick(element) {
    var config = getConfig();
    var direction = element.getAttribute('data-position');
    var dayChangeMagnitude = weekendsShouldBeHidden() ? 7 : 5;
    var change = direction === 'left' ? dayChangeMagnitude * -1 : dayChangeMagnitude;
    var minStartDate = getMinStartDate();
    var maxStartDate = getMaxStartDate();
    var currentStartDate = getStartDate(config);

    if (change < 0 && epochToSecondsEpoch(addDaysToDate(change, currentStartDate).getTime()) < epochToSecondsEpoch(minStartDate.getTime())) {
      return;
    } else if (change > 0 && epochToSecondsEpoch(addDaysToDate(change, currentStartDate).getTime()) > epochToSecondsEpoch(maxStartDate.getTime())) {
      return;
    }

    $wave_CONFIG.APPOINTMENT_SCHEDULER.START_DATE = addDaysToDate(change, currentStartDate);
    rebuildTable(change);
  }

  window.$wave_changeDateArrowClick = changeDateArrowClick;

  function skipNoApptWeek(change) {
    var config = getConfig();
    var minStartDate = getMinStartDate();
    var maxStartDate = getMaxStartDate();
    var currentStartDate = getStartDate(config);

    if (change < 0 && epochToSecondsEpoch(addDaysToDate(change, currentStartDate).getTime()) < epochToSecondsEpoch(minStartDate.getTime())) {
      return;
    } else if (change > 0 && epochToSecondsEpoch(addDaysToDate(change, currentStartDate).getTime()) > epochToSecondsEpoch(maxStartDate.getTime())) {
      return;
    }

    $wave_CONFIG.APPOINTMENT_SCHEDULER.START_DATE = addDaysToDate(change, currentStartDate);
    rebuildTable();
  }

  window.$wave_skipNoApptWeek = skipNoApptWeek;

  function formatData(response) {
    if (response.status === 200) {
      return response.data.map(function (apptObj) {
        apptObj.date = dateStringToDate(apptObj.Appt_Date);
        apptObj.time = apptObj.aStart;
        apptObj.available = apptObj.active === '1' && apptObj.zRecordStatus === 'active' ? '1' : '0';
        apptObj.isToday = dateIsToday(apptObj.date);
        apptObj.isFuture = isFutureDate(apptObj.date);
        apptObj.isPast = isPastDate(apptObj.date);
        apptObj.absoluteMinutesOfDay = timeToAbsoluteMinutesOfDay(apptObj.time);
        return apptObj;
      });
    } else {
      return [];
    }
  }

  function timeToAbsoluteMinutesOfDay(timeString) {
    var timeSplit = timeString.split(':').map(function (value) {
      return Number(value);
    });
    return timeSplit[0] * 60 + timeSplit[1];
  }

  function generateCacheKey(locationID, startDate) {
    return (locationID ? locationID + '-' : '') + startDate;
  }

  function storeInCache(locationID, startDate, data) {
    var key = generateCacheKey(locationID, startDate);
    var cacheMinutesUntilExpiration = 1;
    var storageObject = {
      expiration: new Date().getTime() + cacheMinutesUntilExpiration * 60 * 1000,
      data: data
    };

    if (data && Array.isArray(data)) {
      APPT_TABLE_CACHE[key] = storageObject;
    }

    return data;
  }

  function getFromCache(locationID, startDate) {
    var key = generateCacheKey(locationID, startDate);
    var storageObject = APPT_TABLE_CACHE[key];

    if (storageObject) {
      var expirationTime = storageObject.expiration;
      var hasExpired = expirationTime < new Date().getTime();

      if (hasExpired === false) {
        return storageObject.data;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  function isDemoMode() {
    return WaveInquiryForm.demoMode === true;
  }

  function isLocalServerMode() {
    return isDemoMode() && window.$wave_FORM_ATTRIBUTES['data-local-server-mode'] === 'true';
  }

  function getAppointmentData() {
    return new Promise(function (resolve, reject) {
      var locationValue = $wave_FORM_DATA_MAP.locations.value;
      var clientNumber = window.$wave_FORM_ATTRIBUTES['data-doctor-id'];
      var apptDateList = generateAppointmentDateList();
      var startDate = apptDateList[0];
      var query = {
        clientNumber: clientNumber,
        Appt_Date: generateAppointmentDateList()
      };

      if (!!locationValue) {
        query.Location_ID = locationValue;
        var locationIsHidden = $wave_CONFIG.SETTINGS.HIDE_LOCATIONS === true;
        logDebugValue('getting appointments for: ', $wave_FORM_DATA_MAP.locations.options.filter(function (obj) {
          return obj.id === locationValue;
        })[0].name);
      }

      logSuperDebugValue('appointment data query', query);
      var cachedData = getFromCache(locationValue, startDate);

      if (isDemoMode() && isLocalServerMode() === false) {
        resolve(WaveInquiryForm.getDemoAppointmentData());
      } else {
        if (!!cachedData) {
          resolve(cachedData);
        } else {
          var url = isLocalServerMode() ? '/wave-central/api/v4/getAppointmentData.php' : 'https://central.waveortho.com/wave-central/api/v4/getAppointmentData.php';

          if (EXAM_SCHEDULER_CONFIG.CALL_IN_PROGRESS === false) {
            EXAM_SCHEDULER_CONFIG.CALL_IN_PROGRESS = true;
            u$http.http({
              method: 'POST',
              url: url,
              data: query,
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(function (response) {
              EXAM_SCHEDULER_CONFIG.CALL_IN_PROGRESS = false;
              logSuperDebugValue('response', response);
              var formattedData = formatData(response);
              storeInCache(locationValue, startDate, formattedData);
              resolve(formattedData);
            }, function (error) {
              EXAM_SCHEDULER_CONFIG.CALL_IN_PROGRESS = false;
              console.log(error);
              reject(error);
            });
          }
        }
      }
    });
  }

  function rebuildTable(change) {
    var config = getConfig() !== undefined ? getConfig() : {};
    document.getElementById('WAVE-appointment-scheduler').innerHTML = generateTable(config);

    if (!!change) {
      config.change = change;
    }

    setTableData(config);
  }

  function sortAppointmentArray(appointmentArray) {
    return appointmentArray.sort(function (a, b) {
      var aTime = getTimestampFromMilitaryTimeString(a.time).getTime();
      var bTime = getTimestampFromMilitaryTimeString(b.time).getTime();

      if (aTime > bTime) {
        return 1;
      } else if (aTime < bTime) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  function generateAppointmentGroupObject(dateKeyList) {
    var appointmentGroupObject = {};
    dateKeyList.forEach(function (key) {
      appointmentGroupObject[key] = [];
    });
    return appointmentGroupObject;
  }

  function generateAppointmentDateList() {
    return $wave_CONFIG.DATE_ARRAY.map(function (date) {
      return dateToDateString(date);
    });
  }

  function getMaxAppointments(appointmentDateObject) {
    var dateList = Object.keys(appointmentDateObject);
    var maxAppointments = 0;
    var placeholderCount = generatePlaceholderTimes(0).length;
    dateList.forEach(function (dateString) {
      var currentAppointments = appointmentDateObject[dateString].length;
      maxAppointments = currentAppointments > maxAppointments ? currentAppointments : maxAppointments;
    });
    return placeholderCount > maxAppointments ? placeholderCount : maxAppointments;
  }

  function generatePlaceholderTimes(maxAppointments) {
    if (includePlaceholderAppointments() === true) {
      var config = getConfig();
      var startTime = APPT_TABLE_CACHE.START_TIME;
      var endTime = APPT_TABLE_CACHE.END_TIME;
      var increment = APPT_TABLE_CACHE.INCREMENT;
      var incrementList = generateIncrementList(startTime, endTime, increment);
      var standardIncrements = incrementList.length;
      maxAppointments = !maxAppointments ? standardIncrements : maxAppointments;
      var maxIncrements = standardIncrements > maxAppointments ? maxAppointments : standardIncrements;
      incrementList.length = maxIncrements;
      return incrementList.map(function (timestamp) {
        return {
          time: timestampToTimestring(timestamp, 'military'),
          generated: true,
          available: '0'
        };
      });
    } else {
      return [];
    }
  }

  function removeLastPlaceholderAppointment(appointmentList, maxAppointments) {
    var listLength = appointmentList.length;

    if (listLength > maxAppointments) {
      for (var i = listLength - 1; i >= 0; i--) {
        if (appointmentList.length <= maxAppointments) {
          break;
        }

        if (i >= 0 && appointmentList[i] && appointmentList[i].generated === true) {
          appointmentList.splice(i, 1);
        }
      }
    }

    return appointmentList;
  }

  function removeDuplicates(sanitizedAppointments) {
    var newAppointments = [];
    var lastApptObj = null;
    sanitizedAppointments.forEach(function (currentApptObj, index) {
      if (!!lastApptObj) {
        var isLastItem = index === sanitizedAppointments.length - 1;
        var currentTime = currentApptObj.time;

        if (currentTime !== lastApptObj.time) {
          //not the same time
          newAppointments.push(lastApptObj);
          lastApptObj = Object.assign({}, currentApptObj);

          if (isLastItem) {
            newAppointments.push(currentApptObj);
          }
        } else {
          //same time
          if (lastApptObj.available !== '1' && currentApptObj.available === '1') {
            lastApptObj = Object.assign({}, currentApptObj);
          }

          if (isLastItem) {
            newAppointments.push(lastApptObj);
          }
        }
      } else {
        lastApptObj = Object.assign({}, currentApptObj);

        if (sanitizedAppointments.length === 1) {
          newAppointments.push(currentApptObj);
        }
      }
    });
    return newAppointments;
  }

  function joinAndSanitizeAppointments(placeholderTimes, currentAppointments, maxAppointments) {
    currentAppointments.forEach(function (currentAppointment) {
      var foundTime = false;

      for (var pi = 0; pi < placeholderTimes.length; pi++) {
        var currentPlaceholder = placeholderTimes[pi];
        var currentApptTime = timestampToTimestring(getTimestampFromMilitaryTimeString(currentAppointment.time, 'military'));

        if (currentPlaceholder.time === currentApptTime && !!currentPlaceholder.generated) {
          placeholderTimes[pi] = currentAppointment;
          foundTime = true;
        }
      }

      if (foundTime === false) {
        placeholderTimes.push(currentAppointment);
      }
    });
    var sanitizedAppointments = sortAppointmentArray(removeLastPlaceholderAppointment(placeholderTimes, maxAppointments));
    sanitizedAppointments = removeDuplicates(sanitizedAppointments);

    if (sanitizedAppointments.length === 0) {
      sanitizedAppointments.push(generateNoAppointmentPlaceholder());
    }

    return sanitizedAppointments;
  }

  function generateNoAppointmentPlaceholder() {
    return {
      available: '0',
      isDefault: true,
      text: 'no appointments'
    };
  }

  function setPlaceholderTemplatesToAppointmentDateObject(appointmentDateObject, maxAppointments) {
    var dateList = Object.keys(appointmentDateObject);
    dateList.forEach(function (dateString) {
      var currentAppointments = appointmentDateObject[dateString];
      var placeholderTimes = generatePlaceholderTimes();
      appointmentDateObject[dateString] = joinAndSanitizeAppointments(placeholderTimes, currentAppointments, maxAppointments);
    });
    return appointmentDateObject;
  }

  function showUnavailableAppointments() {
    return $wave_CONFIG.SHOW.UNAVAILABLE_APPOINTMENTS === true || isDemoMode();
  }

  function includePlaceholderAppointments() {
    return $wave_CONFIG.SHOW.PLACEHOLDER_APPOINTMENTS === true || isDemoMode();
  }

  function groupAppointmentArray(sortedData) {
    var dateKeyList = generateAppointmentDateList();
    var appointmentDateObject = generateAppointmentGroupObject(dateKeyList);
    includePlaceholderAppointments();
    sortedData.forEach(function (appointmentObj) {
      var dateString = dateToDateString(appointmentObj.date);

      if (appointmentDateObject[dateString]) {
        appointmentDateObject[dateString].push(appointmentObj);
      }
    });
    var maxAppointments = getMaxAppointments(appointmentDateObject);
    return setPlaceholderTemplatesToAppointmentDateObject(appointmentDateObject, maxAppointments);
  }

  function removeUnavailableAppointments(appointmentArray) {
    return appointmentArray.filter(function (apptObj) {
      return (showUnavailableAppointments() === false && apptObj.available === '0') === false;
    });
  }

  function setTodaysDataToUnavailable(appointmentArray) {
    return appointmentArray.map(function (apptObj) {
      if (apptObj.isToday) {
        apptObj.available = '0';
        apptObj.isToday = true;
      }

      return apptObj;
    });
  }

  function setAppointmentsWithinHourBufferToUnavailable(appointmentArray) {
    var currentHour = new Date().getHours();
    var hourBuffer = Number($wave_CONFIG.SETTINGS.TODAY_APPOINTMENT_BUFFER_HOURS);
    var minHour = currentHour + hourBuffer;
    var minAbsoluteMinuteOfDay = minHour * 60;
    return appointmentArray.map(function (apptObj) {
      if (apptObj.isToday && apptObj.absoluteMinutesOfDay < minAbsoluteMinuteOfDay) {
        apptObj.available = '0';
        apptObj.withinBuffer = true;
      } else {
        apptObj.withinBuffer = false;
      }

      return apptObj;
    });
  }

  function removeAppointmentsInThePast(appointmentArray) {
    return appointmentArray.map(function (apptObj) {
      if (apptObj.isPast) {
        apptObj.available = '0';
        apptObj.isPastDate = true;
      } else {
        apptObj.isPastDate = false;
      }

      return apptObj;
    });
  }

  function dateIsToday(dateObj) {
    var today = deconstructDate(removeTimeFromDate(new Date()));
    dateObj = deconstructDate(removeTimeFromDate(dateObj));
    return ['year', 'month', 'date'].filter(function (key) {
      return dateObj[key] === today[key];
    }).length === 3;
  }

  function isFutureDate(dateObj) {
    var today = deconstructDate(removeTimeFromDate(new Date()));
    dateObj = deconstructDate(removeTimeFromDate(dateObj));

    if (dateObj.year < today.year) {
      return false;
    } else if (dateObj.year === today.year) {
      if (dateObj.month < today.month) {
        return false;
      } else if (dateObj.month === today.month) {
        return dateObj.date > today.date;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  function isPastDate(dateObj) {
    return dateIsToday(dateObj) === false && isFutureDate(dateObj) === false;
  }

  function deconstructDate(dateObj) {
    return {
      year: dateObj.getFullYear(),
      month: dateObj.getMonth() + 1,
      date: dateObj.getDate(),
      _date: dateObj
    };
  }

  function removeTimeFromDate(dateObj) {
    ['setHours', 'setMinutes', 'setSeconds'].forEach(function (action) {
      dateObj[action](0);
    });
    return dateObj;
  }

  function filterAppointmentsByTimeAndDateSettings(appointmentArray) {
    appointmentArray = setAppointmentsWithinHourBufferToUnavailable(appointmentArray);

    if ($wave_CONFIG.SHOW.TODAYS_APPOINTMENTS === false) {
      appointmentArray = setTodaysDataToUnavailable(appointmentArray);
    }

    appointmentArray = removeAppointmentsInThePast(appointmentArray);
    appointmentArray = removeUnavailableAppointments(appointmentArray);
    return appointmentArray;
  }

  function insertPlaceholderCells() {
    var groupedDateObject = groupAppointmentArray([]);
    var newPlaceholderHTML = generateAppointmentTable(groupedDateObject);
    var tbodyElement = document.querySelector('#WAVE-appointment-scheduler tbody');

    if (tbodyElement) {
      tbodyElement.innerHTML = newPlaceholderHTML;
    }
  }

  function generateProgressTime(laterTime, startTime) {
    var msDifference = laterTime - startTime;
    return msDifference / 1000 + ' seconds';
  }

  function setTableData(config) {
    var minTableHeight = APPT_TABLE_CACHE.MIN_HEIGHT;

    if (minTableHeight) {
      insertPlaceholderCells();
    }

    getAppointmentData(config).then(function (appointmentArray) {
      var availableAppointments = appointmentArray.filter(function (apptObj) {
        return apptObj.available === '1';
      }).length;
      logSuperDebugValue('appointment data', appointmentArray);
      logSuperDebugValue('available appointments', availableAppointments);

      if (availableAppointments === 0 && emptyWeeksShouldBeSkipped()) {
        var dayChangeMagnitude = weekendsShouldBeHidden() ? 7 : 5;
        skipNoApptWeek(dayChangeMagnitude);
      } else {
        logDebugValue("found ".concat(appointmentArray.length, " appointments for this date range and location."), "".concat(availableAppointments, " appointments are available and ").concat(appointmentArray.length - availableAppointments, " are unavailable"));
        appointmentArray = filterAppointmentsByTimeAndDateSettings(appointmentArray);
        logSuperDebugValue('filtered appointments', appointmentArray);
        var sortedData = sortAppointmentArray(appointmentArray);
        logSuperDebugValue('sorted appointments', sortedData);
        var groupedDateObject = groupAppointmentArray(sortedData);
        logSuperDebugValue('grouped date objects', groupedDateObject);
        document.querySelector('#WAVE-appointment-scheduler tbody').innerHTML = '';
        var CONFIG = $wave_CONFIG;

        if (!CONFIG.TIMING.GOT_FIRST_APPOINTMENTS) {
          CONFIG.TIMING.GOT_FIRST_APPOINTMENTS = new Date().getTime();
          logDebugValue("\n[PROGRESS] - elapsed time to get remote settings ".concat(generateProgressTime(CONFIG.TIMING.DOCTOR_TIME, CONFIG.TIMING.START_TIME), "\n[PROGRESS] - elapsed time to get first set of appointments ").concat(generateProgressTime(CONFIG.TIMING.GOT_FIRST_APPOINTMENTS, CONFIG.TIMING.START_TIME), "\n                "), '');
        }

        generateAndInsertTableBody(groupedDateObject);
      }
    });
  }

  exports.setTableData = setTableData;

  function generateAppointmentTable(groupedDateObject) {
    var totalRows = getMaxAppointments(groupedDateObject);
    var newHTML = '';

    for (var i = 0; i < totalRows; i++) {
      newHTML = newHTML + generateBodyRow(groupedDateObject, i);
    }

    return newHTML;
  }

  function generateAndInsertTableBody(groupedDateObject) {
    var newHTML = generateAppointmentTable(groupedDateObject);
    document.getElementById('wave-table-body').innerHTML = newHTML;

    if (!APPT_TABLE_CACHE.MIN_HEIGHT) {
      var appointmentSchedulerCell = document.querySelector('#WAVE-appointment-scheduler td');

      if (appointmentSchedulerCell) {
        var cellHeight = appointmentSchedulerCell.offsetHeight;
        var minBodyHeight = generatePlaceholderTimes().length * cellHeight;
        var minHeaderHeight = document.querySelector('#WAVE-appointment-scheduler th').offsetHeight;
        APPT_TABLE_CACHE.MIN_HEIGHT = minBodyHeight + minHeaderHeight;
      }
    }
  }

  function generateAppointmentHTML(appointmentObj) {
    if (appointmentObj) {
      var displayedData = WaveInquiryForm._getText('TEXT.APPOINTMENT_SCHEDULER_UNAVAILABLE_APPOINTMENT'); // let displayedData = 'unavailable';


      if (appointmentObj.isDefault !== true) {
        var timestamp = getTimestampFromMilitaryTimeString(appointmentObj.time);
        var standardTimestring = timestampToTimestring(timestamp, 'standard');
        displayedData = standardTimestring;
      }

      var Appt_ID = appointmentObj.Appt_ID;
      var isAvailable = appointmentObj.available !== '0';
      var tagName = isAvailable ? 'a' : 'span';
      var onClick = tagName === 'a' ? 'window.appointmentTimeClick(this)' : 'javascript:void(0);';
      return "<".concat(tagName, " href=\"javascript:void(0);\" data-appt-id=\"").concat(Appt_ID, "\" onclick=\"").concat(onClick, "\" class=\"appointment-button ").concat(isAvailable ? 'available' : 'unavailable', "\">").concat(displayedData, "</").concat(tagName, ">");
    } else {
      return '';
    }
  }

  function getHourFromAppointmentTimeString(timestring) {
    return Number(timestring.split(':')[0]);
  }

  function getMinutesFromAppointmentTimeString(timestring) {
    return Number(timestring.split(':')[1]);
  }
  /**
   *
   * @param {{time: String, date: String}} valueObj
   * @param {String} [locationName]
   * @returns {string}
   */


  function generateAppointmentString(valueObj, locationName) {
    var militaryTime = valueObj.time;
    var dateString = valueObj.date;
    var year = dateString.split('-')[0];
    var month = dateString.split('-')[1];
    var dayOfMonth = dateString.split('-')[2];
    var monthIndex = Number(month) - 1;
    var date = new Date(year, monthIndex, dayOfMonth);
    var militaryTimeSplit = militaryTime.split(':');
    var militaryHour = Number(militaryTimeSplit[0]);
    var AMPM = getAMorPM(militaryHour);
    var hour = militaryHour;

    if (WaveInquiryForm._getLanguage() !== 'french') {
      hour = militaryHour > 12 ? militaryHour - 12 : militaryHour;
    }

    var minutes = militaryTimeSplit[1];
    var dayOfWeek = getDayOfWeekName(date);
    var shortMonthName = getMonthName(date);
    var time = "".concat(hour, ":").concat(minutes);
    var timeQualifier = AMPM;
    var ending = (!!locationName ? ' ' + locationName : '') + '';
    var appointmentString = "".concat(dayOfWeek, ", ").concat(shortMonthName, " ").concat(dayOfMonth, ", ").concat(year, " ").concat(WaveInquiryForm._getText('TEXT.AT', {
      object: CONSTANTS
    }), " ").concat(time, " ").concat(timeQualifier).concat(ending);
    return appointmentString;
  }

  exports.generateAppointmentString = generateAppointmentString;

  function getAMorPM(militaryHour) {
    var qualifier = militaryHour >= 12 ? 'PM' : 'AM';
    return WaveInquiryForm._getText('AM_PM.' + qualifier, {
      object: CONSTANTS
    }) || '';
  }

  function generateTable() {
    var startTime = APPT_TABLE_CACHE.START_TIME;
    var endTime = APPT_TABLE_CACHE.END_TIME;
    var increment = 15;
    var startDate = getStartDate();
    var endDate = generateEndDate(startDate);
    var dateArray = getDateListBetweenTwoDates(startDate, endDate);
    var timeArray = generateIncrementList(startTime, endTime, increment);
    $wave_CONFIG.DATE_ARRAY = dateArray;
    var textContent = generateTextContent();
    var mainTableContent = generateMainTable(dateArray, timeArray);
    var pleaseCallMeHTML = generatePleaseCallMeHTML();
    return textContent + mainTableContent + pleaseCallMeHTML;
  }

  exports.generateTable = generateTable;

  function generateTextContent() {
    var CONFIG = $wave_CONFIG;
    var ApptConfig = $wave_FORM_DATA_MAP.appointment_scheduler;

    var title = WaveInquiryForm._getText('TEXT.APPOINTMENT_SCHEDULER_TITLE');

    var description = WaveInquiryForm._getText('TEXT.APPOINTMENT_SCHEDULER_DESCRIPTION');

    var required = VariableUtilityService.isFunction(ApptConfig.required) ? ApptConfig.required() : ApptConfig.required;
    var titleClass = CONFIG.CLASSES.APPOINTMENT_SCHEDULER_TITLE;
    var descriptionClass = CONFIG.CLASSES.APPOINTMENT_SCHEDULER_DESCRIPTION;
    var requiredClassName = CONFIG.CLASSES.INPUT_LABEL_REQUIRED;
    var requiredHTML = required === true ? "<sup class=\"".concat(requiredClassName, "\">&#42;</sup>") : '';
    var errorMessage = '';

    if (!!ApptConfig.errorMessage) {
      var errorClassName = $wave_CONFIG.CLASSES.ERROR_MESSAGE;

      if (errorClassName === 'wave-error-message') {
        errorClassName = errorClassName + ' text-center';
      }

      errorMessage = "<p class=\"".concat(errorClassName, "\">").concat(ApptConfig.errorMessage, "</p>");
    }

    var helpText = WaveInquiryForm._getText('TEXT.APPOINTMENT_SCHEDULER_HELP_TEXT', {
      object: CONSTANTS
    });

    var helpTextClass = CONFIG.CLASSES.APPOINTMENT_SCHEDULER_HELP_TEXT;
    return "<div><h3 class=\"".concat(titleClass, "\">").concat(title).concat(requiredHTML, "</h3>").concat(errorMessage, "<p class=\"").concat(descriptionClass, "\">").concat(description, "</p><p class=\"").concat(helpTextClass, "\">").concat(helpText, "</p></div>");
  }

  function generateMainTable(dateArray, timeArray) {
    var headers = generateHeaders(dateArray);
    var body = generateBody({
      timeArray: timeArray,
      dateArray: dateArray
    });
    var tableClass = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_TABLE;
    var table = "<table class=\"".concat(tableClass, "\"> ").concat(headers, " ").concat(body, " </table>");
    return table;
  }

  function generatePleaseCallMeHTML() {
    var showPleaseCallMe = $wave_CONFIG.SHOW.PLEASE_CALL_ME;
    var pleaseCallMeClass = $wave_CONFIG.CLASSES.PLEASE_CALL_ME;

    var pleaseCallMeText = WaveInquiryForm._getText('TEXT.PLEASE_CALL_ME');

    var html = '';

    if (showPleaseCallMe) {
      html = "\n                <a class=\"".concat(pleaseCallMeClass, "\" href=\"javascript:void(null)\" onclick=\"window.$wave_callMe(this)\">\n                    ").concat(pleaseCallMeText, "\n                </a>\n            ");
    }

    return html;
  }

  function getNumberOfTimeIncrementsBetweenStartTimeAndEndTime(increment, startTime, endTime) {
    var startTimeEpoch = startTime.getTime();
    var endTimeEpoch = endTime.getTime();
    var incrementInMS = increment * 60 * 1000;
    var timeDifference = endTimeEpoch - startTimeEpoch;
    var numberOfIncrements = Math.ceil(timeDifference / incrementInMS) + 1;
    return numberOfIncrements - 1;
  }

  function getTimestampFromMilitaryTimeString(timestring) {
    var date = new Date();
    var timestringSplit = timestring.split(':');
    var hours = timestringSplit[0];
    var minutes = timestringSplit[1];
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
  }

  function addMinutesToTimestamp(minutes, timestamp) {
    var newTimestamp = new Date(timestamp);
    return new Date(newTimestamp.setMinutes(newTimestamp.getMinutes() + minutes));
  }

  function generateIncrementList(startTime, endTime, increment) {
    var startTimestamp = getTimestampFromMilitaryTimeString(startTime);
    var endTimestamp = getTimestampFromMilitaryTimeString(endTime);
    var totalIncrements = getNumberOfTimeIncrementsBetweenStartTimeAndEndTime(increment, startTimestamp, endTimestamp);
    var currentIncrement = 0;
    var incrementList = [];

    while (currentIncrement < totalIncrements) {
      var totalMinutes = increment * currentIncrement;
      incrementList.push(addMinutesToTimestamp(totalMinutes, startTimestamp));
      currentIncrement = currentIncrement + 1;
    }

    return incrementList;
  }

  function generateBody(obj) {
    var body = '<tbody id="wave-table-body">';
    body = body + '</tbody>';
    return body;
  }

  function timestampToTimestring(timestamp, type) {
    var hours = '' + timestamp.getHours();
    var minutes = '' + timestamp.getMinutes();
    minutes = minutes.length === 1 ? '0' + minutes : minutes;

    if (type === 'standard' || type === 'condensed') {
      var AmPm = getAMorPM(hours);

      if (WaveInquiryForm._getLanguage() !== 'french') {
        if (hours === 0) {
          hours = 12;
        } else if (hours > 12) {
          hours = hours - 12;
        }
      }

      if (type === 'standard') {
        return hours + ':' + minutes + ' ' + AmPm;
      } else {
        return hours + ' ' + AmPm;
      }
    } else {
      hours = hours.length === 1 ? '0' + hours : hours;
      return hours + ':' + minutes;
    }
  }

  function dateStringToDate(dateString) {
    var dateSplit = dateString.split('-');
    var year = Number(dateSplit[0]);
    var month = Number(dateSplit[1]) - 1;
    var day = Number(dateSplit[2]);
    return new Date(year, month, day);
  }

  function dateToDateString(date) {
    var year = '' + date.getFullYear();
    var month = '' + (date.getMonth() + 1);
    var dayOfMonth = '' + date.getDate();
    month = month.length === 1 ? '0' + month : month;
    dayOfMonth = dayOfMonth.length === 1 ? '0' + dayOfMonth : dayOfMonth;
    return year + '-' + month + '-' + dayOfMonth;
  }

  function generateBodyRow(appointmentDateObject, position) {
    var config = getConfig();
    var dateArray = Object.keys(appointmentDateObject);
    var bodyRowClassNames = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_BODY_ROW;
    var timeDisplayClassNames = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_TIME_DISPLAY;
    var timeDateCellClassNames = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_TIME_DATE_CELL;
    var bodyRow = "<tr class=\"".concat(bodyRowClassNames, "\">");
    bodyRow = bodyRow + "<td class=\"".concat(timeDisplayClassNames, "\"></td>");
    dateArray.forEach(function (dateString, i) {
      var appointmentObject = appointmentDateObject[dateString][position];
      var appointmentHTML = generateAppointmentHTML(appointmentObject);
      var militaryTimestamp = appointmentObject && appointmentObject.time;
      var cell = "<td class=\"".concat(timeDateCellClassNames, "\" data-row-time=\"").concat(militaryTimestamp, "\" data-date=\"").concat(dateString, "\">").concat(appointmentHTML, "</td>");
      bodyRow = bodyRow + cell;
    });
    bodyRow = bodyRow + '<td></td>';
    bodyRow = bodyRow + '</tr>';
    return bodyRow;
  }

  function getDayOfWeekName(date, _short) {
    var daysOfTheWeek = WaveInquiryForm._getText('DAY_NAMES_LONG', {
      object: CONSTANTS
    });

    var shortDaysOfTheWeek = WaveInquiryForm._getText('DAY_NAMES_SHORT', {
      object: CONSTANTS
    });

    var list = _short === true ? shortDaysOfTheWeek : daysOfTheWeek;
    return list[date.getDay()];
  }

  function getMonthName(date) {
    var months = WaveInquiryForm._getText('MONTH_NAMES_SHORT', {
      object: CONSTANTS
    });

    return months[date.getMonth()];
  }

  function showPreviousArrow(date) {
    var daysToSubtract = weekendsShouldBeHidden() ? -7 : -5;
    return epochToSecondsEpoch(addDaysToDate(daysToSubtract, date).getTime()) >= epochToSecondsEpoch(getMinStartDate().getTime());
  }

  function showNextArrow(date) {
    var daysToAdd = weekendsShouldBeHidden() ? 7 : 5;
    return addDaysToDate(daysToAdd, date) <= getMaxStartDate();
  }

  function epochToSecondsEpoch(timeEpoch) {
    return Math.round(timeEpoch / 1000);
  }

  function generateHeaders(dateArray) {
    var tableDateHeaderClassNames = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_HEADER_ROW;
    var tableArrowSelectorClassNames = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_HEADER_ARROWS;
    var dayOfWeekClassNames = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_HEADER_DAY_OF_WEEK;
    var monthClassNames = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_HEADER_MONTH;
    var tableHeaderClassNames = $wave_CONFIG.CLASSES.APPOINTMENT_SCHEDULER_HEADER;
    var headers = "<thead><tr class=\"".concat(tableDateHeaderClassNames, "\">");
    headers = headers + "<th style=\"width: 7.5%;\" class=\"".concat(tableArrowSelectorClassNames, "\"><span style=\"visibility: ").concat(showPreviousArrow(dateArray[0]) ? 'visible' : 'hidden', "\"><a data-position=\"left\" onclick=\"window.$wave_changeDateArrowClick(this);\" href=\"javascript:void(0)\">&lsaquo;</a></span></th>");
    dateArray.forEach(function (date) {
      var dayOfWeek = getDayOfWeekName(date, true);
      var monthName = getMonthName(date);
      var dayOfMonth = date.getDate();
      var dateString = dateToDateString(date);
      var topString = "<span class=\"".concat(dayOfWeekClassNames, "\" style=\"text-align: center;\">").concat(dayOfWeek, "</span>");
      var bottomString = "<span class=\"".concat(monthClassNames, "\" style=\"text-align: center;\">").concat(monthName, " ").concat(dayOfMonth, "</span>");
      var headerElement = "<th style=\"width: 17%;\" data-date=\"".concat(dateString, "\" class=\"").concat(tableHeaderClassNames, "\">").concat(topString, " <br> ").concat(bottomString, "</th>");
      headers = headers + headerElement;
    });
    headers = headers + "<th style=\"width: 7.5%;\" class=\"".concat(tableArrowSelectorClassNames, "\"><span style=\"visibility: ").concat(showNextArrow(dateArray[0]) ? 'visible' : 'hidden', "\"><a data-position=\"right\" onclick=\"window.$wave_changeDateArrowClick(this);\" href=\"javascript:void(0)\">&rsaquo;</a></span></th>");
    headers = headers + '</tr></thead>';
    return headers;
  }

  function getDateListBetweenTwoDates(startDate, stopDate, options) {
    options = VariableUtilityService.isObject(options) ? options : {};
    startDate = new Date(startDate);
    stopDate = new Date(stopDate);
    var dateArray = [];
    var currentDate = startDate;

    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = addDaysToDate(1, currentDate);
    }

    if (options.ignoreLastDay === true) {
      dateArray.splice(-1, 1);
    }

    return dateArray;
  }

  function getMostRecentWeekday(day) {
    var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var day_addition = isNaN(day) === false ? day % 7 : 0; //defaults to Sunday

    if (typeof day === 'string' && daysOfWeek.indexOf(day) > -1) {
      day = day.toLowerCase();
      var index = daysOfWeek.indexOf(day);

      if (index > -1) {
        day_addition = index;
      }
    }

    var date_obj = new Date();
    date_obj.setDate(date_obj.getDate() - date_obj.getDay() + day_addition);
    date_obj.setHours(0, 0, 0);
    return date_obj;
  }

  function getMaxStartDate() {
    var today = new Date();
    return addDaysToDate(90, today);
  }

  function getMinStartDate() {
    var today = new Date();
    var minStartDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (weekendsShouldBeHidden()) {
      minStartDate = getMostRecentWeekday('monday');

      if (todayIsAWeekendDay()) {
        minStartDate.setDate(minStartDate.getDate() + 7);
      }
    }

    return minStartDate;
  }

  function todayIsAWeekendDay() {
    var dayOfTheWeek = new Date().getDay();
    return dayOfTheWeek === 6 || dayOfTheWeek === 7;
  }

  function weekendsShouldBeHidden() {
    return $wave_CONFIG.SETTINGS.NO_WEEKENDS === true;
  }

  function emptyWeeksShouldBeSkipped() {
    return $wave_CONFIG.SETTINGS.SKIP_EMPTY_APPT_WEEKS === true;
  }

  function getStartDate(config) {
    var startDate = $wave_CONFIG.APPOINTMENT_SCHEDULER.START_DATE;

    if (!startDate) {
      startDate = getMinStartDate();
      $wave_CONFIG.APPOINTMENT_SCHEDULER.START_DATE = startDate;
    }

    return startDate;
  }

  function generateEndDate(startDate) {
    var daysToBeShown = APPT_TABLE_CACHE.TOTAL_DAYS_TO_BE_SHOWN;
    return addDaysToDate(daysToBeShown - 1, startDate);
  }

  function addDaysToDate(days, dateObj) {
    if (days === 0) {
      return dateObj;
    } else {
      var day_ms = 1000 * 60 * 60 * 24;
      var newDays = VariableUtilityService.isInteger(days) ? day_ms * days : undefined;
      var newDateMilliseconds = (!!dateObj ? new Date(dateObj) : new Date()).getTime(); //account for daylight savings time difference between start and end date

      var ogTimezoneOffset = dateObj.getTimezoneOffset() * 60 * 1000;
      var newTimezoneOffset = new Date(newDays + newDateMilliseconds).getTimezoneOffset() * 60 * 1000;
      var diffTimezoneOffsets = ogTimezoneOffset - newTimezoneOffset;
      var finalDate = diffTimezoneOffsets === 0 ? new Date(newDays + newDateMilliseconds) : new Date(newDays + newDateMilliseconds - diffTimezoneOffsets);
      return newDays && newDateMilliseconds ? finalDate : undefined;
    }
  }

  function isDST(d) {
    var jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    var jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) !== d.getTimezoneOffset();
  }

  function isDebugMode() {
    var CONFIG = $wave_CONFIG;
    return !!CONFIG && !!CONFIG.SETTINGS && !!CONFIG.SETTINGS.DEBUG_MODE && CONFIG.SETTINGS.DEBUG_MODE === 'true' || isSuperDebugMode();
  }

  function isSuperDebugMode() {
    var formID = window.$wave_formID;

    if (formID) {
      var element = document.getElementById(formID);

      if (element) {
        var attributes = HTMLService.extractAttributesFromElement(element);
        return attributes && attributes['data-super-debug-mode'] === 'true';
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function logDebugValue(label, value, options) {
    options = VariableUtilityService.isObject(options) ? options : {};

    var _boolean = options.show === true || options.show === false ? options.show : true;

    var force = options.force === true;
    var logType = !!options.logType ? options.logType : 'log';

    if ((isDebugMode() === true || force === true) && _boolean === true) {
      var debugString = 'wave-inquiry-form:';
      console[logType](debugString, label, value);
    }
  }

  function logSuperDebugValue(label, value, options) {
    if (isSuperDebugMode()) {
      options = VariableUtilityService.isObject(options) ? options : {};
      options.force = true;
      logDebugValue(label, value, options);
    }
  }

  return exports;
}();

window.$wave_MAPS_SERVICE = function () {
  var exports = {};
  var VariableUtilityService = $wave_UtilityService;
  var HTMLService = $wave_HTMLService;
  var FormService = $wave_FormService;
  var u$http = $wave_u$http;
  var CONSTANTS = window.$wave_CONSTANTS;
  var TABLE_CONFIG = undefined;
  var CONFIG;
  var MAP_CONFIG = {
    LOCATION_PRIMARY_KEY: 'id'
  }; //==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-//

  function generateMap() {
    setTimeout(function () {
      var mapHasLoaded = $wave_CONFIG.MAP_HAS_LOADED === true;

      if (mapHasLoaded === false) {
        loadApiCall();
      } else {
        initMap();
      }
    }, 500);
  }

  exports.generateMap = generateMap;

  function showDefaultLocationOnly() {
    return MAP_CONFIG.LOCATION_COUNT === 1 || $wave_CONFIG.SHOW.DEFAULT_LOCATION_ON_MAP_ONLY_ON_MAP && $wave_CONFIG.SETTINGS.HIDE_LOCATIONS === true;
  }

  function initMap() {
    $wave_CONFIG.MAP_HAS_LOADED = true;
    $wave_CONFIG.MAP_MARKERS = [];
    var mapConfig = $wave_FORM_DATA_MAP['google_maps'];
    var importedData = mapConfig.options;
    createAndInsertMap(mapConfig, importedData);
  }

  window.initMap = initMap;

  function createAndInsertMap(mapConfig, importedData) {
    var map;
    var mapID = mapConfig.attributes.id;
    var mapElement = document.getElementById(mapID);
    var currentLocation = $wave_FORM_DATA_MAP.locations.value;
    MAP_CONFIG.LOCATION_COUNT = importedData.locations.length;
    var multipleLocationsExist = MAP_CONFIG.LOCATION_COUNT > 1;
    var onlyOneLocationExists = multipleLocationsExist === false;
    MAP_CONFIG.LOCATION_PRIMARY_KEY = 'id';

    if (onlyOneLocationExists) {
      if (!importedData.locations[0].id) {
        MAP_CONFIG.LOCATION_PRIMARY_KEY = 'name';
      }

      currentLocation = importedData.locations[0][MAP_CONFIG.LOCATION_PRIMARY_KEY];
    }

    if (showDefaultLocationOnly() && currentLocation) {
      importedData.locations = importedData.locations.filter(function (obj) {
        return obj[MAP_CONFIG.LOCATION_PRIMARY_KEY] === currentLocation;
      });
      var onlyLocation = importedData.locations[0];
      importedData.centerCoordinates = onlyLocation.coordinates;
    }

    var windowWidth = window.innerWidth;
    var maxSmallWindowWidth = 525;
    var selectedCoordinates = windowWidth <= maxSmallWindowWidth ? importedData.smallCoordinates : importedData.centerCoordinates;
    var config = {
      center: selectedCoordinates,
      zoom: selectedCoordinates.zoom,
      zoomControl: true,
      scaleControl: true,
      disableDefaultUI: true
    };
    map = new google.maps.Map(mapElement, config);
    importedData.locations.forEach(function (locationConfig) {
      var marker = new google.maps.Marker({
        position: locationConfig.coordinates,
        map: map
      });
      var selectThisLocationHTML = generateSelectThisLocationHTML(locationConfig);
      var titleHTML = generateLocationNameHTML(locationConfig);
      var showSelectThisLocation = isImmediateChangeMode() ? 'none' : 'inherit';
      var infoWindowHTML = "\n                <div class=\"info-window\">\n                    <p class=\"title\">\n                        ".concat(titleHTML, "\n                    </p>\n                    \n                    <p class=\"description\">\n                        ").concat(locationConfig.address, "\n                    </p>\n                    \n                    <p class=\"select-this-location\" style=\"display: ").concat(showSelectThisLocation, "\">\n                        ").concat(selectThisLocationHTML, "\n                    </p>\n                </div>\n                ");
      var infoWindow = new google.maps.InfoWindow({
        content: infoWindowHTML
      });
      marker.addListener('click', function () {
        if (isImmediateChangeMode()) {
          window._selectLocationByKeyValue('id', locationConfig.id);
        } else {
          if (showDefaultLocationOnly() === false) {
            infoWindow.open(map, marker);
          }
        }
      });
      $wave_CONFIG.MAP_MARKERS.push({
        marker: marker,
        infoWindow: infoWindow,
        map: map,
        locationConfig: locationConfig
      });
    });
    setActiveLocationMarker();

    if (showDefaultLocationOnly() || importedData.locations.length === 1) {
      var locationConfig = $wave_CONFIG.MAP_MARKERS[0];
      locationConfig.infoWindow.open(map, locationConfig.marker);
    }
  }

  function generateLocationNameHTML(locationConfig) {
    if (showDefaultLocationOnly() || isImmediateChangeMode()) {
      return locationConfig.name;
    } else {
      return "\n                <a href=\"javascript:void(null);\" onclick=\"window._selectLocationByKeyValue('id', '".concat(locationConfig.id, "')\">\n                    ").concat(locationConfig.name, "\n                </a>\n            ");
    }
  }

  function generateSelectThisLocationHTML(locationConfig) {
    if (showDefaultLocationOnly() || isImmediateChangeMode()) {
      return '';
    } else {
      return "\n                <a href=\"javascript:void(null);\" onclick=\"window._selectLocationByKeyValue('id', '".concat(locationConfig.id, "')\">").concat(WaveInquiryForm._getText('TEXT.SELECT_THIS_LOCATION', {
        object: CONSTANTS
      }), "</a>\n            ");
    }
  }

  function isImmediateChangeMode() {
    return $wave_CONFIG.SETTINGS.MAP_IMMEDIATE_CHANGE_MODE === true;
  }

  function loadApiCall() {
    var newScriptElement = document.createElement('script');
    newScriptElement.defer = true;
    newScriptElement.async = true;
    newScriptElement.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCX-bPf3aemJ3C4Xv9nOAy6dRI-otH3qmo&callback=window.initMap';
    document.head.appendChild(newScriptElement);
  }

  function closeAllInfoWindows() {
    var markers = $wave_CONFIG.MAP_MARKERS;

    if (markers && markers.length > 0) {
      markers.forEach(function (marker) {
        var infoWindow = marker.infoWindow;
        infoWindow.close();
      });
    }
  }

  window._$wave_closeAllInfoWindows = closeAllInfoWindows;

  function setActiveLocationMarker() {
    var markers = $wave_CONFIG.MAP_MARKERS;
    var activeLocationID = $wave_FORM_DATA_MAP.locations.value;
    var oldLocationID = $wave_FORM_DATA_MAP.locations.oldValue;
    var isDifferentLocation = activeLocationID !== oldLocationID || activeLocationID === null;

    if (markers.length > 0 && isDifferentLocation) {
      closeAllInfoWindows();
      markers.forEach(function (markerConfig) {
        var marker = markerConfig.marker,
            locationConfig = markerConfig.locationConfig,
            infoWindow = markerConfig.infoWindow,
            map = markerConfig.map;
        var isActive = locationConfig.id === activeLocationID;
        var activeUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAArCAYAAACJrvP4AAAB/2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmRVg9Imh0dHA6Ly9jaXBhLmpwL2V4aWYvMS4wLyIKICAgIHhtbG5zOmF1eD0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC9hdXgvIgogICB0aWZmOkltYWdlTGVuZ3RoPSI0MyIKICAgdGlmZjpJbWFnZVdpZHRoPSIyNyIKICAgZXhpZkVYOkxlbnNNb2RlbD0iIgogICBhdXg6TGVucz0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+oFM5+QAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/ZogYP4qFhcWkYTWjQYmNMhJqksYog83M896Mmjde7z1JtspWUWLj14K/gK2yVopIycbGmtgwPefNqJHMuZ17Pvd77zndey544llFtyrDoOdsMzYa8c8kZv3Vz3jx0Uw3DUnFMoYmJ6OUtY87Ktx4E3JrlT/3r9UtqJYCFTXCg4ph2sJjwtEV23B5W7hFySQXhE+Fg6ZcUPjW1VNFfnE5XeQvl814bBg8TcL+9C9O/WIlY+rC8nICenZZ+bmP+xKfmpuektgu3oZFjFEi+BlnhGH6pCsDMvcRoocuWVEmP1zIn2BJchWZDVYxWSRNBpugqMtSXZWoia7KyLLq9v9vXy2tt6dY3ReBqifHeeuA6i3IbzrO56Hj5I/A+wgXuVL+0gH0v4u+WdIC+9C4DmeXJS21A+cb0PpgJM1kQfKKezQNXk+gPgHN11A7V+zZzz7H9xBfk6+6gt096JTzjfPfRpRn15L095AAAAAJcEhZcwAACxMAAAsTAQCanBgAAATlSURBVFiFtddNbFRVFAfw/7n33dd5700/ptN2Sgt0xlIoUEAihRgSILLgI40bMCl0YVDUho11RUKQEIEFCYm60wVBSYgmxI0hRFhhgyFAmiiiKO20xZCGOvSL+Z73cV04xbaZedPpjGczmXfOvb95J/e++4ZQIKSUXgB7k7bZ7Uhnk8J4vWDcMB07bjl2hBH7RePiWwA/EFHMbS5yQWpStnmKM9YbjkUy/ROD1eHEc0xlEohaKVQqHvhUHa16HXb422ZavfWq7ThfeLj4hIimF41JKQ+kHevSnclh5crTe9qMmSzUAFQLDT3LtyZfr33FqmDKESL6zhWTUlLGsc6kHKvv7J/XjdHEREFkYQR1P06u2R/3MOWzCi5O5sXStnl2PB398PQf17xRK1U0NBuVigen27tigYrKz+eCLzEp5YEXVurrj369apQCzQU/3fBWvErxvD3bUspCNWnH+uvjR99XLqV1+SKo+3Fm7ZvRCqasJKJpBgAp2zz102RYKScEAKOJCdyZHFZStnkKAJiU0ssZ6/3m6X2trFI2rjy9p3HGeqWUXgXA3nAskpkxk66YBDA6MoL40BjM6ThEjQFjVROCoVD+zQpgxkwiHItk2isb9ypJ2+zunxisLgQ9unUXybH/2pyOzCAdmUHyyd9Yu2ubK9g/MVjdovu7mSOdTeHEczcLoyMj86C5kRybwOjIiOv4cOI5HOlsYgrj9VOZhGtxfGispPxUJgGF8XomiBtR231fmdPxkvJROwVB3GBpx5r0C8O1WNSUlvcLA2nHmmS2dJ4EPFWuxcaqppLyAU8VbOk8YZzYwCqjwXYrDoZC0Jr8OXNakx/BUMgVazMabE5sgKSUr02ZiVsf/HzF6zZgqfsMAL58tSfmE/ouhYgGYlZ6fH1Vk/e3F/lXFQEIhUJAgbtYGOurmqAy5RkRDTAA0Jg4f7i5031JLTEON3fGDa6eBwAGAIzo0grNN9PpC5YV6vQFsVKvnQbw1UuMiCwPF+8dbdke54yVBeKM4WjL9ngFU94nIusllgWve5joP9TcmSkHdqi5M+Nh4kciuj57bd5taFy8s6dhXWaF5isJWqH5sKdhXUbj4t251+dhRPRMEO/ra90dLQXra90dFcT7iOhZXgwAOGMX/arxcH+gw1oKtD/QYflV4yFn7OLCXM7VoHO1p3v5llSt6v7MWxi1qoHu5VtSOld7cuVzYkQ0IoifOxbaWVQ7j4V2RgXxc0SU84DLu845sQurjYbxrYvce1t9Qaw2GsY5sQv5avJi2b13pDe4IyEYd4UE4+gN7kh4uDgyu6eKwrLgbYWxm12NG10XS1fjRkth7CYR3XarK/i48DBx/OCyzZauqDnzuqLi4LLNloeJ44XmKogR0WNT2je6AhtynnldgQ22Ke0bRPS4ZAwAdK6e2BfoSDGaf3IxIuwLdKR0rp5YzDyLwojodwD3t/nmn2XZ7/ez+fJgAGBw9fKuutXz/sa+UbcmZnD18mLnKOY8uba+cpmC2VYSYW1lowLgWtkxIoqY0hlsM+oBAG1GPUzpDBJRpOxYNh606P++ZWU/HxQzuChM42K4VugSAGqFLjUuhv83jIHG6lRvEgDqVG+Sgdxf8kvBAAy1exvNGlVHu7fRBDBU5PjFh5SSJa3MVcuxk0krc1VKWdSP/QeLX8DUnGVCUgAAAABJRU5ErkJggg==\n';
        var inactiveUrl = 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png';
        marker.setIcon(isActive ? activeUrl : inactiveUrl);

        if (isActive && isImmediateChangeMode()) {
          infoWindow.open(map, marker);
        }
      });
    }

    $wave_FORM_DATA_MAP.locations.oldValue = activeLocationID;
  }

  window._$wave_setActiveLocationMarker = setActiveLocationMarker;

  function isDebugMode() {
    CONFIG = window.$wave_CONFIG;
    return !!CONFIG && !!CONFIG.SETTINGS && !!CONFIG.SETTINGS.DEBUG_MODE && CONFIG.SETTINGS.DEBUG_MODE === 'true' || isSuperDebugMode();
  }

  function isSuperDebugMode() {
    var formID = window.$wave_formID;

    if (formID) {
      var element = document.getElementById(formID);

      if (element) {
        var attributes = HTMLService.extractAttributesFromElement(element);
        return attributes && attributes['data-super-debug-mode'] === 'true';
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function logDebugValue(label, value, options) {
    options = VariableUtilityService.isObject(options) ? options : {};

    var _boolean2 = options.show === true || options.show === false ? options.show : true;

    var force = options.force === true;
    var logType = !!options.logType ? options.logType : 'log';
    value = value === null ? '' : value;

    if ((isDebugMode() === true || force === true) && _boolean2 === true) {
      var debugString = 'wave-inquiry-form:';
      console[logType](debugString, label, value);
    }
  }

  function logSuperDebugValue(label, value, options) {
    if (isSuperDebugMode()) {
      options = VariableUtilityService.isObject(options) ? options : {};
      options.force = true;
      logDebugValue(label, value, options);
    }
  }

  return exports;
}();

var WaveInquiryForm = function () {
  var exports = {};
  var DataService = window.$wave_DataService;
  var UtilityService = window.$wave_UtilityService;
  var HTMLService = window.$wave_HTMLService;
  var FormService = window.$wave_FormService;
  var CONSTANTS = window.$wave_CONSTANTS;
  var ATTRIBUTE_CONFIG_MAP = window.$wave_ATTRIBUTE_CONFIG_MAP;
  var AppointmentScheduler = window.$wave_APPOINTMENT_SCHEDULER;
  var MapsService = window.$wave_MAPS_SERVICE;
  var versionNumber = '7.5.8'; //==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-//

  var CONFIG = {
    CLASSES: {},
    LABEL: {},
    PLACEHOLDERS: {},
    SHOW: {},
    TEXT: {},
    REQUIREMENTS: {},
    APPOINTMENT_SCHEDULER: {},
    SETTINGS: {},
    VALIDATIONS: {},
    TIMING: {},
    LANGUAGE_OPTIONS: [],
    MAP_HAS_LOADED: false,
    IS_DISABLED: false,
    LAST_MOUSE_CLICK: null,
    LANGUAGE: 'english'
  };
  var saveInProgress = false;
  window.$wave_CONFIG = CONFIG;
  window.$wave_FORM_ATTRIBUTES = {};
  window.$wave_DOCTOR_DATA = {};
  var FORM_DATA_MAP = {
    form: {
      tag: 'div',
      attributes: {
        id: 'WAVE-form',
        "class": function _class() {
          return CONFIG.CLASSES.FORM;
        }
      },
      showAlways: true,
      show: function show() {
        return CONFIG.SHOW.INQUIRY_FORM;
      },
      target: function target() {
        return getAppID();
      }
    },
    title: {
      tag: 'h1',
      attributes: {
        id: 'WAVE-title',
        "class": function _class() {
          return CONFIG.CLASSES.TITLE;
        }
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && CONFIG.SHOW.HEADER;
      },
      children: function children() {
        return _getText('TEXT.HEADER');
      },
      target: function target() {
        return 'WAVE-form';
      },
      onReRender: function onReRender() {
        var elementName = 'title';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
        }
      }
    },
    description: {
      tag: 'p',
      attributes: {
        id: 'WAVE-description',
        "class": function _class() {
          return CONFIG.CLASSES.DESCRIPTION;
        }
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && !!_getText('TEXT.DESCRIPTION');
      },
      children: function children() {
        return _getText('TEXT.DESCRIPTION');
      },
      target: function target() {
        return 'WAVE-form';
      },
      onReRender: function onReRender() {
        var elementName = 'description';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
        }
      }
    },
    alertMessage: {
      tag: 'div',
      attributes: {
        id: 'WAVE-alertMessage',
        "class": function _class() {
          return CONFIG.CLASSES.ALERT;
        }
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && !!FORM_DATA_MAP.alertMessage.value;
      },
      value: null,
      children: function children() {
        var title = FORM_DATA_MAP.alertMessage.value;
        return !!title ? title : '';
      },
      target: function target() {
        return 'WAVE-form';
      },
      onReRender: function onReRender() {
        var elementName = 'alertMessage';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';

          if (value) {
            element.innerText = value;
          }
        }
      }
    },
    patientStatus: {
      tag: 'div',
      attributes: {
        id: 'WAVE-patientStatus',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      focusThis: true,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['patientStatus'],
      isFormItem: true,
      label: function label() {
        return _getText('LABEL.PATIENT_STATUS');
      },
      required: function required() {
        return CONFIG.REQUIREMENTS.PATIENT_STATUS;
      },
      target: 'WAVE-form',
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && CONFIG.SHOW.PATIENT_STATUS;
      },
      defaultValue: 'New Patient',
      value: null,
      errorMessage: null,
      options: function options() {
        return _getText('PATIENT_CURRENT_STATUS', {
          object: CONSTANTS
        });
      },
      children: function children() {
        var thisConfig = FORM_DATA_MAP.patientStatus;
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var options = FormService.generateOptions(thisConfig.options);
        var select = FormService.generateSelectInput(options, {
          dataMapID: 'patientStatus'
        });
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [label, select, message].join('\r\n');
      },
      onReRender: function onReRender() {
        var elementName = 'patientStatus';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var selectElement = element.querySelector('select');

          if (selectElement.value !== value) {
            selectElement.value = value;
          }

          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          if (shouldBeShown) {
            var _selectElement = element.querySelector('select');

            if (_selectElement) {
              setElementDisability(_selectElement);
            }
          }
        }
      }
    },
    locations: {
      tag: 'div',
      attributes: {
        id: 'WAVE-locations',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      characterLimit: 100,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['locations'],
      isFormItem: true,
      label: function label() {
        return _getText('LABEL.LOCATION');
      },
      required: function required() {
        return CONFIG.REQUIREMENTS.LOCATION;
      },
      onChange: function onChange(newValue) {
        FORM_DATA_MAP.appointment_scheduler.value = undefined;
      },
      show: function show() {
        var self = FORM_DATA_MAP.locations;
        var isSubmitted = CONFIG.IS_SUBMITTED;
        var options = self && self.options;
        var optionsExist = !!options && Array.isArray(options) && options.length > 1;
        var showLocations = CONFIG.SETTINGS.HIDE_LOCATIONS !== true;
        return isSubmitted === false && showLocations && optionsExist;
      },
      options: [],
      target: 'WAVE-form',
      value: null,
      oldValue: null,
      errorMessage: null,
      children: function children() {
        var thisConfig = FORM_DATA_MAP.locations;
        var message = FormService.generateMessage(thisConfig.errorMessage);

        if (CONFIG.SHOW.LOCATIONS_POPOVER) {
          var optionsList = FormService.generateOptionsList(thisConfig.options, {
            keys: {
              id: 'id',
              text: 'name'
            }
          });
          var popoverButton = FormService.generateLocationsButtonAndPopover(optionsList, {
            dataMapID: 'locations'
          });
          return [popoverButton, message].join('\r\n');
        } else {
          var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
          var options = FormService.generateOptions(thisConfig.options, {
            keys: {
              id: 'id',
              text: 'name'
            }
          });
          var select = FormService.generateSelectInput(options, {
            dataMapID: 'locations'
          });
          return [label, select, message].join('\r\n');
        }
      },
      onReRender: function onReRender() {
        var elementName = 'locations';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);
        var showPopover = CONFIG.SHOW.LOCATIONS_POPOVER;

        if (showPopover) {
          var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
          var popoverList = popoverTriggerList.map(function (el) {
            return new bootstrap.Popover(el, {
              content: function content() {
                var popoverEl = document.getElementById('popover-content').cloneNode(true);
                return popoverEl;
              },
              html: true
            });
          });
        }

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';

          if (shouldBeShown && !showPopover) {
            var inputElement = document.querySelector('[data-map-id="' + elementName + '"]');

            if (shouldBeShown && inputElement) {
              setElementDisability(inputElement);
            }

            if (!!value) {
              var currentAttributeValue = inputElement.getAttribute('value');
              var currentValue = inputElement.value;

              if (currentAttributeValue !== value) {
                inputElement.setAttribute('value', value);
                var selectedOptionElement = inputElement.querySelector('option[value="' + value + '"]');

                if (selectedOptionElement) {
                  selectedOptionElement.setAttribute('selected', '');
                }
              }

              if (currentValue !== value) {
                inputElement.value = value;
              }
            } else {
              inputElement.selectedIndex = -1;
              inputElement.removeAttribute('value');

              var _selectedOptionElement = inputElement.querySelector('option[selected]');

              if (_selectedOptionElement) {
                _selectedOptionElement.removeAttribute('selected');
              }
            }
          }

          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }
        }
      }
    },
    services: {
      tag: 'div',
      attributes: {
        id: 'WAVE-services',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['services'],
      isFormItem: true,
      required: function required() {
        return CONFIG.REQUIREMENTS.SERVICES;
      },
      label: function label() {
        return _getText('LABEL.SERVICES');
      },
      show: function show(config) {
        var self = FORM_DATA_MAP.services;
        var isSubmitted = CONFIG.IS_SUBMITTED;
        var options = self && self.options;

        if (UtilityService.isFunction(options)) {
          options = options();
        }

        var optionsExist = !!options && Array.isArray(options) && options.length > 1;
        var isNewPatient = FORM_DATA_MAP.patientStatus.value === 'New Patient';

        if (!FORM_DATA_MAP.patientStatus.value && FORM_DATA_MAP.patientStatus.show(config) === false) {
          isNewPatient = true;
        }

        var settingsSetToShow = CONFIG.SHOW.SERVICES === true;
        return isSubmitted === false && settingsSetToShow && optionsExist && isNewPatient;
      },
      options: function options() {
        return _getText('SERVICES', {
          object: CONSTANTS
        });
      },
      target: 'WAVE-form',
      value: null,
      defaultValue: 'Consultation',
      altValue: '',
      errorMessage: null,
      children: function children() {
        var thisConfig = FORM_DATA_MAP.services;
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var options = FormService.generateOptions(thisConfig.options);
        var select = FormService.generateSelectInput(options, {
          dataMapID: 'services'
        });
        var message = FormService.generateMessage(thisConfig.errorMessage);
        var input = "\n                    <div class=\"".concat(UtilityService.extractValue(CONFIG.CLASSES.FORM_GROUP), "\">\n                        ").concat(FormService.generateTextInput(_getText('TEXT.PROVIDE_MORE_DETAILS', {
          object: CONSTANTS
        }), thisConfig.altValue, {
          valueKey: 'altValue',
          dataMapID: 'services'
        }), "\n                    </div>\n                ");
        return [label, select, input, message].join('\r\n');
      },
      onReRender: function onReRender() {
        var elementName = 'services';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          var inputElement = element.querySelector('input');

          if (inputElement) {
            inputElement.style.display = value === 'Other' ? 'inherit' : 'none';

            if (shouldBeShown) {
              setElementDisability(inputElement);
            }
          }
        }
      }
    },
    age: {
      tag: 'div',
      attributes: {
        id: 'WAVE-age',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['age'],
      isFormItem: true,
      required: function required() {
        return CONFIG.REQUIREMENTS.AGE;
      },
      label: function label() {
        return _getText('LABEL.AGE');
      },
      onChange: function onChange(newValue) {},
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        var showAge = CONFIG.SHOW.AGE;
        return isSubmitted === false && showAge && showFormDetailInputs();
      },
      options: function options() {
        return _getText('AGE_OPTIONS', {
          object: CONSTANTS
        });
      },
      target: 'WAVE-form',
      value: null,
      altValue: '',
      errorMessage: null,
      validate: function validate() {
        var elementName = 'age';
        var thisConfig = FORM_DATA_MAP[elementName];
        var value = thisConfig.value;
        var altValue = thisConfig.altValue;
        var isRequired = thisConfig.required();
        var isShowing = thisConfig.show();
        var valueIsOther = thisConfig.isOtherOption(value);

        if (isShowing) {
          if (isRequired) {
            if (!!value && value.length > 0) {
              if (valueIsOther) {
                if (!!altValue && altValue.length > 0) {
                  return true;
                } else {
                  return _getText('TEXT.FIELD_IS_REQUIRED', {
                    object: CONSTANTS
                  });
                }
              } else {
                return true;
              }
            } else {
              return _getText('TEXT.FIELD_IS_REQUIRED', {
                object: CONSTANTS
              });
            }
          } else {
            return true;
          }
        } else {
          return true;
        }
      },
      children: function children() {
        var elementName = 'age';
        var thisConfig = FORM_DATA_MAP[elementName];
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var options = FormService.generateOptions(UtilityService.extractValue(thisConfig.options), {
          noDefault: true
        });
        var select = FormService.generateSelectInput(options, {
          dataMapID: elementName
        });
        var input = "\n                    <div class=\"".concat(UtilityService.extractValue(CONFIG.CLASSES.FORM_GROUP), "\">\n                        ").concat(FormService.generateTextInput('Age', thisConfig.altValue, {
          valueKey: 'altValue',
          dataMapID: elementName
        }), "\n                    </div>\n                ");
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [label, select, input, message].join('\r\n');
      },
      isOtherOption: function isOtherOption(value) {
        return !!value && typeof value === 'string' && (value.toLowerCase() === 'other' || value.toLowerCase() === 'other...');
      },
      onReRender: function onReRender() {
        var elementName = 'age';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var options = thisConfig.options;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);
        var customInputElement = document.querySelector('input[data-map-id="' + elementName + '"][data-value-key="altValue"]');

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var selectElement = element.querySelector('select');

          if (selectElement.value !== value) {
            selectElement.value = value;
          }

          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          if (shouldBeShown) {
            var _selectElement2 = element.querySelector('select');

            if (_selectElement2) {
              setElementDisability(_selectElement2);
            }

            var onlyOptionIsCustom = options && options.length === 1 && thisConfig.isOtherOption(options[0]); //The office only wants to show the custom input, so we'll always hide the regular dropdown

            if (onlyOptionIsCustom) {
              thisConfig.value = options[0];
              value = thisConfig.value;
              _selectElement2.style.display = 'none';
            }
          }
        }

        if (customInputElement) {
          var valueIsOther = thisConfig.isOtherOption(value);
          var customInputShouldBeShown = valueIsOther === true;
          customInputElement.style.display = customInputShouldBeShown ? 'inherit' : 'none';

          if (customInputShouldBeShown === false) {
            thisConfig.altValue = '';
            customInputElement.value = thisConfig.altValue;
          }
        }
      }
    },
    reference: {
      tag: 'div',
      attributes: {
        id: 'WAVE-references',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['reference'],
      isFormItem: true,
      required: function required() {
        return CONFIG.REQUIREMENTS.REFERENCES;
      },
      label: function label() {
        return _getText('LABEL.REFERENCES');
      },
      onChange: function onChange(newValue) {},
      show: function show(config) {
        var self = FORM_DATA_MAP.reference;
        var isSubmitted = CONFIG.IS_SUBMITTED;
        var options = UtilityService.extractValue(self.options);
        var totalOptions = options && Array.isArray(options) ? options.length : 0;
        var optionsExist = !!options && Array.isArray(options) && options.length > 1; //The office is intending to have the custom input field be visible always

        if (totalOptions === 1 && self.isOtherOption(options[0])) {
          optionsExist = true;
        }

        var isNewPatient = FORM_DATA_MAP.patientStatus.value === 'New Patient';

        if (!FORM_DATA_MAP.patientStatus.value && FORM_DATA_MAP.patientStatus.show(config) === false) {
          isNewPatient = true;
        }

        var showSettingIsTrue = CONFIG.SHOW.REFERENCE === true;
        return isSubmitted === false && showSettingIsTrue && optionsExist && isNewPatient && showFormDetailInputs();
      },
      options: function options() {
        return transformReferralMethods(_getText('REFERRAL_METHODS', {
          object: CONSTANTS
        }));
      },
      target: 'WAVE-form',
      value: null,
      altValue: '',
      errorMessage: null,
      validate: function validate() {
        var elementName = 'reference';
        var thisConfig = FORM_DATA_MAP[elementName];
        var value = thisConfig.value;
        var altValue = thisConfig.altValue;
        var isRequired = thisConfig.required();
        var isShowing = thisConfig.show();
        var valueIsOther = thisConfig.isOtherOption(value);

        if (isShowing) {
          if (isRequired) {
            if (!!value && value.length > 0) {
              if (valueIsOther) {
                if (!!altValue && altValue.length > 0) {
                  return true;
                } else {
                  return _getText('TEXT.FIELD_IS_REQUIRED', {
                    object: CONSTANTS
                  });
                }
              } else {
                return true;
              }
            } else {
              return _getText('TEXT.FIELD_IS_REQUIRED', {
                object: CONSTANTS
              });
            }
          } else {
            return true;
          }
        } else {
          return true;
        }
      },
      children: function children() {
        var thisConfig = FORM_DATA_MAP.reference;
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var options = FormService.generateOptions(thisConfig.options, {
          noDefault: true
        });
        var select = FormService.generateSelectInput(options, {
          dataMapID: 'reference'
        });
        var input = "\n                    <div class=\"".concat(UtilityService.extractValue(CONFIG.CLASSES.FORM_GROUP), "\">\n                        ").concat(FormService.generateTextInput(_getText('TEXT.WORD_OF_MOUTH_OTHER', {
          object: CONSTANTS
        }), thisConfig.altValue, {
          valueKey: 'altValue',
          dataMapID: 'reference'
        }), "\n                    </div>\n                ");
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [label, select, input, message].join('\r\n');
      },
      isOtherOption: function isOtherOption(value) {
        return !!value && typeof value === 'string' && (value.toLowerCase() === 'other' || value.toLowerCase() === 'other...');
      },
      onReRender: function onReRender() {
        var elementName = 'reference';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var altValue = thisConfig.altValue;
        var error = thisConfig.errorMessage;
        var options = thisConfig.options;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);
        var customInputElement = document.querySelector('input[data-map-id="' + elementName + '"][data-value-key="altValue"]');

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var selectElement = element.querySelector('select');

          if (selectElement.value !== value) {
            selectElement.value = value;
          }

          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          if (shouldBeShown) {
            var _selectElement3 = element.querySelector('select');

            if (_selectElement3) {
              setElementDisability(_selectElement3);
            }

            var onlyOptionIsCustom = UtilityService.isArray(options) && options.length === 1 && thisConfig.isOtherOption(options[0]); //The office only wants to show the custom input, so we'll always hide the regular dropdown

            if (onlyOptionIsCustom) {
              thisConfig.value = options[0];
              value = thisConfig.value;
              _selectElement3.style.display = 'none';
            }
          }
        }

        if (customInputElement) {
          var valueIsOther = thisConfig.isOtherOption(value);
          var customInputShouldBeShown = valueIsOther === true;
          customInputElement.style.display = customInputShouldBeShown ? 'inherit' : 'none';

          if (customInputElement.value !== altValue) {
            customInputElement.value = altValue;
          }

          if (customInputShouldBeShown === false) {
            thisConfig.altValue = '';
            customInputElement.value = thisConfig.altValue;
          }
        }
      }
    },
    firstName: {
      tag: 'div',
      attributes: {
        id: 'WAVE-firstName',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      characterLimit: 40,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['firstName'],
      isFormItem: true,
      required: function required() {
        return CONFIG.REQUIREMENTS.FIRST_NAME;
      },
      label: function label() {
        return _getText('LABEL.FIRST_NAME');
      },
      placeholder: function placeholder() {
        if (CONFIG.SHOW.PLACEHOLDERS === true) {
          return _getText('PLACEHOLDERS.FIRST_NAME');
        }
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && showFormDetailInputs();
      },
      target: 'WAVE-form',
      value: '',
      errorMessage: null,
      children: function children() {
        var thisConfig = FORM_DATA_MAP.firstName;
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var textInput = FormService.generateTextInput(thisConfig.placeholder, thisConfig.value, {
          dataMapID: 'firstName'
        });
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [label, textInput, message].join('\r\n');
      },
      onReRender: function onReRender() {
        var elementName = 'firstName';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          if (shouldBeShown) {
            var inputElement = element.querySelector('input');
            setElementDisability(inputElement);

            if (inputElement.value !== value) {
              inputElement.value = value;
            }
          }
        }
      }
    },
    lastName: {
      tag: 'div',
      attributes: {
        id: 'WAVE-lastName',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      characterLimit: 40,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['lastName'],
      isFormItem: true,
      required: function required() {
        return CONFIG.REQUIREMENTS.LAST_NAME;
      },
      label: function label() {
        return _getText('LABEL.LAST_NAME');
      },
      placeholder: function placeholder() {
        if (CONFIG.SHOW.PLACEHOLDERS === true) {
          return _getText('PLACEHOLDERS.LAST_NAME');
        }
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && showFormDetailInputs();
      },
      target: 'WAVE-form',
      value: '',
      errorMessage: null,
      children: function children() {
        var thisConfig = FORM_DATA_MAP.lastName;
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var textInput = FormService.generateTextInput(thisConfig.placeholder, thisConfig.value, {
          dataMapID: 'lastName'
        });
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [label, textInput, message].join('\r\n');
      },
      onReRender: function onReRender() {
        var elementName = 'lastName';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          if (shouldBeShown) {
            var inputElement = element.querySelector('input');
            setElementDisability(inputElement);

            if (inputElement.value !== value) {
              inputElement.value = value;
            }
          }
        }
      }
    },
    email: {
      tag: 'div',
      attributes: {
        id: 'WAVE-email',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      characterLimit: 40,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['email'],
      validate: function validate() {
        var thisConfig = FORM_DATA_MAP.email;
        var currentValue = thisConfig.value;
        var isRequired = UtilityService.isFunction(thisConfig.required) ? thisConfig.required() : thisConfig.required;
        var validationIsRequired = CONFIG.VALIDATIONS.EMAIL === true;

        if (isRequired === true) {
          currentValue = UtilityService.getSanitizedEmail(currentValue);

          if (typeof currentValue === 'string' && currentValue.length > 0) {
            if (validationIsRequired) {
              if (UtilityService.isValidEmail(currentValue)) {
                return true;
              } else {
                return _getText('TEXT.EMAIL_IS_INVALID', {
                  object: CONSTANTS
                });
              }
            } else {
              return true;
            }
          } else {
            return _getText('TEXT.EMAIL_IS_REQUIRED', {
              object: CONSTANTS
            });
          }
        } else {
          return true;
        }
      },
      isFormItem: true,
      required: function required() {
        return CONFIG.REQUIREMENTS.EMAIL;
      },
      label: function label() {
        return _getText('LABEL.EMAIL');
      },
      placeholder: function placeholder() {
        if (CONFIG.SHOW.PLACEHOLDERS === true) {
          return _getText('PLACEHOLDERS.EMAIL');
        }
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && showFormDetailInputs();
      },
      sanitize: function sanitize(value) {
        return UtilityService.getSanitizedEmail(value);
      },
      target: 'WAVE-form',
      value: '',
      errorMessage: null,
      children: function children() {
        var thisConfig = FORM_DATA_MAP.email;
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var textInput = FormService.generateTextInput(thisConfig.placeholder, thisConfig.value, {
          dataMapID: 'email'
        });
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [label, textInput, message].join('\r\n');
      },
      onReRender: function onReRender() {
        var elementName = 'email';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          if (shouldBeShown) {
            var inputElement = element.querySelector('input');
            setElementDisability(inputElement);

            if (inputElement.value !== value) {
              inputElement.value = value;
            }
          }
        }
      }
    },
    phone: {
      tag: 'div',
      attributes: {
        id: 'WAVE-phone',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      characterLimit: 25,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['phone'],
      validate: function validate() {
        var thisConfig = FORM_DATA_MAP.phone;
        var currentValue = thisConfig.value;
        var isRequired = UtilityService.isFunction(thisConfig.required) ? thisConfig.required() : thisConfig.required;
        var validationIsRequired = CONFIG.VALIDATIONS.PHONE === true;

        if (isRequired === true) {
          currentValue = currentValue.trim();

          if (!!currentValue) {
            if (validationIsRequired) {
              if (UtilityService.isValidPhone(currentValue)) {
                return true;
              } else {
                return _getText('TEXT.PHONE_IS_INVALID', {
                  object: CONSTANTS
                });
              }
            } else {
              return true;
            }
          } else {
            return _getText('TEXT.PHONE_IS_REQUIRED', {
              object: CONSTANTS
            });
          }
        } else {
          return true;
        }
      },
      sanitize: function sanitize(value) {
        return UtilityService.getSanitizedPhoneNumber(value);
      },
      isFormItem: true,
      required: function required() {
        return CONFIG.REQUIREMENTS.PHONE;
      },
      label: function label() {
        return _getText('LABEL.PHONE');
      },
      placeholder: function placeholder() {
        if (CONFIG.SHOW.PLACEHOLDERS === true) {
          return _getText('PLACEHOLDERS.PHONE');
        }
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && showFormDetailInputs();
      },
      target: 'WAVE-form',
      value: '',
      errorMessage: null,
      children: function children() {
        var thisConfig = FORM_DATA_MAP.phone;
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var textInput = FormService.generateTextInput(thisConfig.placeholder, thisConfig.value, {
          dataMapID: 'phone'
        });
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [label, textInput, message].join('\r\n');
      },
      onReRender: function onReRender() {
        var elementName = 'phone';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          if (shouldBeShown) {
            var inputElement = element.querySelector('input');
            setElementDisability(inputElement);

            if (inputElement.value !== value) {
              inputElement.value = value;
            }
          }
        }
      }
    },
    inquiry: {
      tag: 'div',
      attributes: {
        id: 'WAVE-inquiry',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_GROUP;
        }
      },
      characterLimit: 1000,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['inquiry'],
      isFormItem: true,
      required: function required() {
        return CONFIG.REQUIREMENTS.INQUIRY;
      },
      label: function label() {
        return _getText('LABEL.INQUIRY');
      },
      placeholder: function placeholder() {
        if (CONFIG.SHOW.PLACEHOLDERS === true) {
          return _getText('PLACEHOLDERS.INQUIRY');
        }
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && showFormDetailInputs() && CONFIG.SHOW.INQUIRY;
      },
      target: 'WAVE-form',
      value: '',
      errorMessage: null,
      children: function children() {
        var thisConfig = FORM_DATA_MAP.inquiry;
        var label = FormService.generateLabel(thisConfig.label, thisConfig.required);
        var textInput = FormService.generateTextInput(thisConfig.placeholder, thisConfig.value, {
          type: 'textarea',
          dataMapID: 'inquiry'
        });
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [label, textInput, message].join('\r\n');
      },
      onReRender: function onReRender() {
        var elementName = 'inquiry';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }

          if (shouldBeShown) {
            var inputElement = element.querySelector('textarea');
            setElementDisability(inputElement);

            if (inputElement.value !== value) {
              inputElement.value = value;
            }
          }
        }
      }
    },
    textMessageConsent: {
      tag: 'div',
      errorMessage: null,
      attributes: {
        id: 'WAVE-textMessageConsent',
        "class": function _class() {
          return CONFIG.CLASSES.FORM_CHECK;
        }
      },
      sanitize: function sanitize(value) {
        if (value === "on") {
          return 1;
        } else {
          return 0;
        }
      },
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['textMessageConsent'],
      isFormItem: true,
      required: function required() {
        var phoneNumberNotEmpty = !!FORM_DATA_MAP.phone.value ? true : false;
        return phoneNumberNotEmpty ? true : false;
      },
      label: function label() {
        var brandName = window.$wave_DOCTOR_DATA.brandName;
        var privacyPolicyUrl = 'https://www.waveortho.com/privacy-policy.php';
        var termsOfServiceUrl = 'https://www.waveortho.com/terms-of-service.php';
        var part1;

        part1 = _getText('LABEL.TEXT_MESSAGE_CONSENT');
        // if (!brandName) {
        //   part1 = _getText('LABEL.TEXT_MESSAGE_CONSENT');
        // } else {
        //   part1 = "".concat(_getText('LABEL.TEXT_MESSAGE_CONSENT_1'), " ").concat(brandName).concat(_getText('LABEL.TEXT_MESSAGE_CONSENT_2'));
        // }

        var part2 = _getText('LABEL.VIEW_PRIVACY_POLICY');

        var part3 = _getText('LABEL.AND');

        var part4 = _getText('LABEL.VIEW_TERMS_OF_SERVICE');

        return "<span>".concat(part1, " </span><a href=\"").concat(privacyPolicyUrl, "\" target=\"_blank\">").concat(part2, "</a><span> ").concat(part3, " </span><a href=\"").concat(termsOfServiceUrl, "\" target=\"_blank\">").concat(part4, "</a><span>.</span>");
      },
      show: function show() {
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && showFormDetailInputs();
      },
      target: function target() {
        return 'WAVE-form';
      },
      children: function children() {
        var elementName = 'textMessageConsent';
        var thisConfig = FORM_DATA_MAP[elementName];
        var checkbox = FormService.generateCheckboxInput(thisConfig.label, thisConfig.required, {
          dataMapID: elementName
        });
        var message = FormService.generateMessage(thisConfig.errorMessage);
        return [checkbox, message].join('\r\n');
      },
      onReRender: function onReRender() {
        var elementName = 'textMessageConsent';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }
        }
      }
    },
    google_maps: {
      tag: 'div',
      target: 'WAVE-form',
      isFormItem: false,
      showOnSubmissionSuccess: false,
      attributes: {
        id: 'WAVE-map',
        "class": function _class() {
          return CONFIG.CLASSES.MAP;
        }
      },
      show: function show() {
        var thisConfig = FORM_DATA_MAP.google_maps;
        var isSubmitted = CONFIG.IS_SUBMITTED;
        var showGoogleMaps = !!CONFIG.SHOW.GOOGLE_MAPS && CONFIG.SHOW.GOOGLE_MAPS_LOCAL;
        var showLocations = CONFIG.SETTINGS.HIDE_LOCATIONS !== true;
        var locationHasADefaultValue = !!FORM_DATA_MAP.locations.value;

        if (showLocations === false) {
          return isSubmitted === false && locationHasADefaultValue && showGoogleMaps && CONFIG.SHOW.DEFAULT_LOCATION_ON_MAP_ONLY_ON_MAP === true;
        } else {
          return isSubmitted === false && showGoogleMaps;
        }
      },
      children: function children() {
        var thisConfig = FORM_DATA_MAP.google_maps;
        return '';
      },
      onReRender: function onReRender() {
        var elementName = 'google_maps';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.error;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          var isEmpty = element.offsetParent === null || HTMLService.isEmpty(element);
          var isHidden = element.style.display === 'none' || element.style.display === '';
          var isShowing = isEmpty === false || isHidden === false;
          var hasNotLoaded = thisConfig.hasLoaded !== true; //if it is showing and should be shown or is not showing and shouldn't be shown, do nothing

          if (isShowing !== shouldBeShown || shouldBeShown === false) {
            element.style.display = shouldBeShown ? 'inherit' : 'none';
          }

          if (hasNotLoaded && shouldBeShown) {
            MapsService.generateMap();
            thisConfig.hasLoaded = true;
          }

          if (isShowing) {
            window._$wave_setActiveLocationMarker();
          }

          var errorMessageElement = element.querySelector('.wave-error-message');

          if (errorMessageElement) {
            var hasError = !!error;
            errorMessageElement.style.display = hasError ? 'inherit' : 'none';
            errorMessageElement.innerText = hasError ? error : '';
          }
        }
      }
    },
    appointment_scheduler: {
      tag: 'div',
      isFormItem: true,
      showOnSubmissionSuccess: true,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['appointmentScheduler'],
      attributes: {
        id: 'WAVE-appointment-scheduler',
        "class": function _class() {
          return CONFIG.CLASSES.APPOINTMENT_SCHEDULER;
        }
      },
      sanitize: function sanitize(value) {
        if (value) {
          return value.Appt_ID;
        }
      },
      customRequiredMessage: 'Please select an appointment',
      required: function required() {
        return CONFIG.REQUIREMENTS.APPOINTMENT_SCHEDULER;
      },
      validate: function validate() {
        var thisConfig = FORM_DATA_MAP.appointment_scheduler;
        var pleaseCallConfig = FORM_DATA_MAP.appointment_call_me;
        var currentValue = thisConfig.value;
        var pleaseCallValue = pleaseCallConfig.value === true;
        var isRequired = UtilityService.isFunction(thisConfig.required) ? thisConfig.required() : thisConfig.required;

        if (isRequired) {
          if (!!currentValue || !!pleaseCallValue) {
            return true;
          } else {
            return _getText('TEXT.PLEASE_SELECT_APPOINTMENT', {
              object: CONSTANTS
            });
          }
        } else {
          return true;
        }
      },
      show: function show() {
        var thisConfig = FORM_DATA_MAP.appointment_scheduler;
        var isSubmitted = CONFIG.IS_SUBMITTED;
        var showAppointmentScheduler = CONFIG.SHOW.APPOINTMENT_SCHEDULER && CONFIG.SHOW.ALLOW_APPOINTMENT_SCHEDULER === true;
        var patientStatusConfig = FORM_DATA_MAP.patientStatus;
        var patientStatusValue = patientStatusConfig.value;
        var isNewPatient = patientStatusValue === 'New Patient';

        if (!FORM_DATA_MAP.patientStatus.value && FORM_DATA_MAP.patientStatus.show() === false) {
          isNewPatient = true;
        }

        var locationElement = document.getElementById('WAVE-locations');
        var locationIsShowing = !!(locationElement && locationElement.innerHTML && locationElement.innerHTML !== '');
        var clientHasMultipleLocations = FORM_DATA_MAP.locations.options.length > 1;
        var locationIsSet = !!FORM_DATA_MAP.locations.value || clientHasMultipleLocations === false;
        var locationsAreHidden = CONFIG.SETTINGS.HIDE_LOCATIONS === true;
        var locationIsValid = false;

        if (locationsAreHidden === true) {
          if (locationIsSet === true) {
            locationIsValid = true;
          }
        } else {
          if (locationIsShowing && locationIsSet || locationIsShowing === false) {
            locationIsValid = true;
          }
        }

        return !!(showAppointmentScheduler && isNewPatient && locationIsValid);
      },
      children: function children() {
        var newHtml;
        var thisConfig = FORM_DATA_MAP.appointment_scheduler;
        var userHasSelectedAppointment = !!thisConfig.value;
        var userWantsToBeCalled = FORM_DATA_MAP.appointment_call_me.value === true;
        var valueExists = userHasSelectedAppointment || userWantsToBeCalled;

        if (valueExists) {
          var staticApptTimeMessage = "<b>".concat(_getText('TEXT.OUR_OFFICE_WILL_CALL_YOU_TO_SCHEDULE_APPOINTMENT', {
            object: CONSTANTS
          }), "</b>");

          if (userHasSelectedAppointment && userWantsToBeCalled === false) {
            var appointmentData = generateAppointmentConfirmationString();
            staticApptTimeMessage = "".concat(_getText('TEXT.YOU_HAVE_SELECTED', {
              object: CONSTANTS
            }), ":  <b>").concat(appointmentData, "</b>");
          }

          var appointmentSuccessMessage = _getText('TEXT.APPOINTMENT_SCHEDULER_SUCCESS_MESSAGE');

          if (userWantsToBeCalled) {
            appointmentSuccessMessage = _getText('TEXT.APPOINTMENT_SCHEDULER_CALL_ME_SUCCESS_MESSAGE', {
              object: CONSTANTS
            });
          }

          var appointmentSuccessMessageDetailsClass = CONFIG.CLASSES.APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_DETAILS;
          var appointmentSuccessMessageHeaderClass = CONFIG.CLASSES.APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_HEADER;
          var appointmentSuccessMessageChangeButtonClass = CONFIG.CLASSES.APPOINTMENT_SCHEDULER_COMPLETION_MESSAGE_CHANGE_BUTTON;
          var changeText = "<button class=\"".concat(appointmentSuccessMessageChangeButtonClass, "\" onclick=\"window.resetAppointmentScheduler();\">").concat(_getText('TEXT.CHANGE_APPOINTMENT_BUTTON'), "</button>");

          if (CONFIG.IS_SUBMITTED) {
            changeText = '';
            appointmentSuccessMessage = '';
          }

          newHtml = "\n                        <p class=\"".concat(appointmentSuccessMessageHeaderClass, "\">\n                            ").concat(staticApptTimeMessage, " ").concat(changeText, "\n                        </p>\n                        \n                        <p class=\"").concat(appointmentSuccessMessageDetailsClass, "\">\n                            ").concat(appointmentSuccessMessage, "\n                        </p>\n                    ");
        } else {
          if (CONFIG.IS_SUBMITTED !== true) {
            newHtml = AppointmentScheduler.generateTable();
            AppointmentScheduler.setTableData();
          }
        }

        return newHtml;
      },
      target: function target() {
        return 'WAVE-form';
      },
      onReRender: function onReRender() {
        var elementName = 'appointment_scheduler';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var error = thisConfig.errorMessage;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';

          if (shouldBeShown === true) {
            element.innerHTML = UtilityService.extractValue(thisConfig.children);
            var errorMessageElement = element.querySelector('.wave-error-message');

            if (errorMessageElement) {
              var hasError = !!error;
              errorMessageElement.style.display = hasError ? 'inherit' : 'none';
              errorMessageElement.innerText = hasError ? error : '';
            }
          }
        }
      }
    },
    appointment_call_me: {
      tag: 'div',
      isFormItem: true,
      databaseKey: CONSTANTS.DATABASE_KEY_MAP['appointmentCallMe'],
      attributes: {
        id: 'WAVE-appointment-scheduler-call-me',
        "class": function _class() {
          return '';
        }
      },
      sanitize: function sanitize(value) {
        return value === true ? '1' : '0';
      },
      customRequiredMessage: false,
      required: false,
      hiddenValue: true,
      show: false,
      children: function children() {
        return '';
      },
      target: function target() {
        return 'WAVE-form';
      },
      onReRender: function onReRender() {
        var elementName = 'appointment_call_me';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
        }
      }
    },
    submit: {
      tag: 'button',
      attributes: {
        id: 'WAVE-submit',
        "class": function _class() {
          return CONFIG.CLASSES.BUTTON_SUBMIT;
        },
        type: 'button',
        onclick: 'window.$wave_action_submitForm(event)'
      },
      show: function show() {
        var thisConfig = FORM_DATA_MAP['submit'];
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && showFormDetailInputs();
      },
      children: function children() {
        return _getText('TEXT.SUBMIT_BUTTON');
      },
      target: function target() {
        return 'WAVE-form';
      },
      onReRender: function onReRender() {
        var elementName = 'submit';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';

          if (shouldBeShown) {
            setElementDisability(element);
          }
        }
      }
    },
    reset: {
      tag: 'button',
      attributes: {
        id: 'WAVE-reset',
        "class": function _class() {
          return CONFIG.CLASSES.BUTTON_RESET;
        },
        type: 'button',
        onclick: 'window.$wave_action_resetForm(event)'
      },
      show: function show() {
        var thisConfig = FORM_DATA_MAP['reset'];
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && CONFIG.SHOW.RESET_BUTTON;
      },
      children: function children() {
        return _getText('TEXT.RESET_BUTTON');
      },
      target: function target() {
        return 'WAVE-form';
      },
      onReRender: function onReRender() {
        var elementName = 'reset';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';

          if (shouldBeShown) {
            setElementDisability(element);
          }
        }
      }
    },
    languagePicker: {
      tag: 'div',
      attributes: {
        id: 'WAVE-language-picker',
        "class": function _class() {
          return CONFIG.CLASSES.LANGUAGE_PICKER;
        }
      },
      show: function show() {
        var thisConfig = FORM_DATA_MAP['languagePicker'];
        var isSubmitted = CONFIG.IS_SUBMITTED;
        var languageOptions = UtilityService.extractValue(thisConfig.options);
        return isSubmitted === false && languageOptions.length > 0;
      },
      children: function children() {
        var thisConfig = FORM_DATA_MAP['languagePicker'];
        var languageOptions = UtilityService.extractValue(thisConfig.options);
        return languageOptions.map(function (language) {
          var isSelected = _getLanguage() === language.value;

          if (isSelected) {
            return "<a class=\"active\">".concat(language.text, "</a>");
          } else {
            return "<a href=\"javascript:void(0);\" class=\"inactive\" onclick=\"window.$wave_action_changeLanguage(event)\" value=\"".concat(language.value, "\">").concat(language.text, "</a>");
          }
        }).join('<div class="separator"></div>');
      },
      options: function options() {
        return CONFIG.LANGUAGE_OPTIONS;
      },
      onReRender: function onReRender() {
        var thisConfig = FORM_DATA_MAP['languagePicker'];
        var elementID = thisConfig.attributes.id;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
        }
      }
    },
    warning: {
      tag: 'p',
      attributes: {
        id: 'WAVE-warning',
        "class": function _class() {
          return CONFIG.CLASSES.WARNING;
        }
      },
      show: function show() {
        var thisConfig = FORM_DATA_MAP['warning'];
        var isSubmitted = CONFIG.IS_SUBMITTED;
        return isSubmitted === false && CONFIG.SHOW.WARNING;
      },
      children: function children() {
        return _getText('TEXT.WARNING');
      },
      target: function target() {
        return 'WAVE-form';
      },
      onReRender: function onReRender() {
        var elementName = 'warning';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
        }
      }
    },
    successMessage: {
      tag: 'div',
      attributes: {
        id: 'WAVE-successMessage',
        "class": function _class() {
          return CONFIG.CLASSES.SUCCESS_MESSAGE_BOX;
        }
      },
      showOnSubmissionSuccess: true,
      show: function show() {
        var thisConfig = FORM_DATA_MAP['successMessage'];
        return CONFIG.IS_SUBMITTED;
      },
      target: 'WAVE-form',
      value: null,
      children: function children() {
        var title = "<h2 class=\"".concat(CONFIG.CLASSES.SUCCESS_MESSAGE_TITLE, "\">").concat(_getText('TEXT.SUBMISSION_SUCCESS_TITLE'), "</h2>");
        var description = "\n                    <p class=\"".concat(CONFIG.CLASSES.SUCCESS_MESSAGE_TEXT, "\">").concat(_getText('TEXT.SUBMISSION_SUCCESS_MESSAGE'), "</p>\n                ");
        return [title, description].join('\n');
      },
      onReRender: function onReRender() {
        var elementName = 'successMessage';
        var thisConfig = FORM_DATA_MAP[elementName];
        var elementID = thisConfig.attributes.id;
        var value = thisConfig.value;
        var shouldBeShown = UtilityService.extractValue(thisConfig.show) === true;
        var element = document.getElementById(elementID);

        if (element) {
          element.style.display = shouldBeShown ? 'inherit' : 'none';
        }
      }
    }
  };
  window.$wave_FORM_DATA_MAP = FORM_DATA_MAP;
  var FORM_RENDER_ORDER = ['form', 'title', 'description', 'alertMessage', 'patientStatus', 'services', 'locations', 'google_maps', 'appointment_scheduler', 'appointment_call_me', 'firstName', 'lastName', 'age', 'email', 'phone', 'reference', 'inquiry', 'textMessageConsent', 'submit', 'reset', 'warning', 'languagePicker', 'successMessage'];
  logDebugValue('version number:', versionNumber, {
    force: true
  });
  setTimeout(function () {
    run();
  }); //==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-//
  //PUBLIC METHODS

  function createForm(id, config) {
    CONFIG.CUSTOM_START_CALLED = true;
    logDebugValue('create form function was called', true, {
      force: true
    });

    if (!!id) {
      CONFIG.CUSTOM_ID = id;
    }

    FORM_DATA_MAP.locations.options = [];
    resetFormHasLoadedValues();
    saveFormAttributes();
    generateForm(config && config.reRender === true);
  }

  exports.createForm = createForm; //==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-==--====--=----=-//
  //PRIVATE METHODS

  function run(attempts) {
    var MAX_ATTEMPTS = 7;
    attempts = attempts || 0;

    if (inquiryFormIDExists()) {
      if (CONFIG.CUSTOM_START_CALLED !== true) {
        saveFormAttributes();

        if (getFormSettingsAttribute('data-wait') !== 'true') {
          generateForm();
        }
      }
    } else {
      if (attempts < MAX_ATTEMPTS) {
        setTimeout(function () {
          run(attempts + 1);
        }, 750);
      } else {
        logDebugValue('attempted to auto-load max times');
      }
    }
  }

  function generateForm(reRender) {
    if (inquiryFormIDExists()) {
      CONFIG.TIMING.START_TIME = new Date().getTime();
      logDebugValue('form generation beginning: ', CONFIG.TIMING.START_TIME);
      logDebugValue('form location was found by id:', getAppID(), {
        force: true
      });
      prepareFormData(reRender);
    } else {
      var id = getAppID();
      formErrorOccurred({
        message: 'element could not be found by that ID: ' + id,
        fatal: true,
        status: 400
      });
    }
  }

  function prepareFormData(reRender) {
    CONFIG.TIMING.DOCTOR_LOADING = new Date().getTime();
    getDoctorInfo().then(function success() {
      CONFIG.TIMING.DOCTOR_TIME = new Date().getTime();
      logDebugValue('\n\n[PROGRESS] - elapsed time to get remote settings', generateProgressTime(CONFIG.TIMING.DOCTOR_TIME, CONFIG.TIMING.START_TIME));
      configureApplicationSettings();
      checkAndLogBasicSettings();
      logDebugValue('show inquiry form', CONFIG.SHOW.INQUIRY_FORM);
      logDebugValue('show google maps', CONFIG.SHOW.GOOGLE_MAPS);
      logDebugValue('show exam scheduler', CONFIG.SHOW.ALLOW_APPOINTMENT_SCHEDULER);
      logDebugValue('show booked appointments', CONFIG.SHOW.UNAVAILABLE_APPOINTMENTS);
      logDebugValue('show placeholder appointments', CONFIG.SHOW.PLACEHOLDER_APPOINTMENTS);
      logDebugValue("found ".concat(FORM_DATA_MAP.locations.options.length, " locations:"), "(".concat(FORM_DATA_MAP.locations.options.map(function (obj) {
        return obj.name;
      }).join(', '), ")"));
      renderForm(reRender);
    }, function (error) {
      formErrorOccurred(error);
    });
  }

  function getDoctorInfo() {
    return new Promise(function (resolve, reject) {
      if (UtilityService.isObject(getDoctorData(), true) && getDoctorData().clientNumber === getDoctorID()) {
        resolve();
      } else {
        var doctorID = getDoctorID();

        var _isDemoMode = WaveInquiryForm.demoMode === true;

        if (!!doctorID || _isDemoMode) {
          logDebugValue('found doctor id:', doctorID);
          DataService.getDoctorData(doctorID).then(function (response) {
            if (response.status === 204) {
              logDebugValue('invalid doctor id', doctorID);
              reject({
                message: 'invalid doctor id',
                doctorID: doctorID,
                fatal: true,
                status: 400
              });
            } else {
              storeDoctorData(response.data[0]);
              logSuperDebugValue('doctor data', response.data[0]);
              resolve();
            }
          }, function (error) {
            if (error.status === 403) {
              reject({
                message: error.data.message,
                action: 'Please contact WaveOrtho to diagnose this issue or to subscribe to the inquiry form service',
                status: 403,
                fatal: true
              });
            } else {
              logDebugValue('unknown server error when getting doctor information, if this error persists, please contact WaveOrtho support', error);
              reject(error);
            }
          });
        } else {
          logDebugValue('no doctor id was found', '', {
            force: true,
            logType: 'error'
          });
          reject({
            message: 'No doctor id was found',
            fatal: true
          });
        }
      }
    });
  }

  function configureApplicationSettings() {
    setAttributeDataSettings();
    setDoctorDataSettings();
    setDefaultFormConfigItems();
  }

  function setAttributeDataSettings() {
    var attributeData = getAttributeSettings();
    var attributeConfigMap = getAttributeConfigMap();
    var selectedCSSLibrary = attributeData['data-default-css-library'];

    if (CONSTANTS.CSS_LIBRARIES[selectedCSSLibrary]) {
      CONSTANTS.CLASSES = CONSTANTS.CSS_LIBRARIES[selectedCSSLibrary];
      CONFIG.SETTINGS.DEFAULT_CSS_LIBRARY = selectedCSSLibrary;
    }

    checkLanguageSettings(attributeData);
    checkDataReferencesLocationSettings(attributeData);
    checkFakeDataSettings(attributeData);
    attributeConfigMap.forEach(function (obj) {
      if (obj.manual !== true) {
        var inputValue = attributeData[obj.attribute];
        var type = obj.type;

        if (type === 'overwrite') {
          var defaultValue = UtilityService.isFunction(obj["default"]) ? obj["default"]() : obj["default"];

          if (UtilityService.isString(inputValue, !obj.allowEmptyString) === false) {
            inputValue = defaultValue;
          } else if (obj.appendable === true) {
            if (inputValue[0] === '+') {
              inputValue = inputValue.substr(1);
              inputValue = inputValue + ' ' + defaultValue;
            }
          }
        } else if (type === 'boolean') {
          var isValidInput = inputValue === 'true' || inputValue === 'false';

          if (isValidInput) {
            inputValue = inputValue === 'true';
          } else {
            inputValue = UtilityService.isFunction(obj["default"]) ? obj["default"]() : obj["default"];
          }
        }

        CONFIG[obj.group] = UtilityService.isObject(CONFIG[obj.group]) ? CONFIG[obj.group] : {};
        CONFIG[obj.group][obj.key] = inputValue;
      }
    });
  }

  function setDoctorDataSettings() {
    var doctorData = getDoctorData();
    setInquiryFormSettings(doctorData);
    setGoogleMapSettings(doctorData);
    setExamSchedulerSettings(doctorData);
    setCustomReferenceSettings(doctorData);
    setCustomAgeOptionsSettings(doctorData);
    setLocationSettings(doctorData);
    setDefaultPatientStatus(doctorData);

    if (CONFIG.SHOW.GOOGLE_MAPS === true && FORM_DATA_MAP.google_maps.hiddenLocations && FORM_DATA_MAP.google_maps.hiddenLocations.length > 0) {
      filterGoogleMapLocations();
    }
  }

  function setDefaultFormConfigItems() {
    CONFIG.IS_DISABLED = false;
    CONFIG.IS_SUBMITTED = false;
  }

  function checkAndLogBasicSettings() {
    var doctorData = getDoctorData();
    var inquiryFormSubscriptionIsInactive = doctorData.flagInquiryForm !== '1';
    var examSchedulerSubscriptionIsInactive = doctorData.flagApptScheduler !== '1';

    if (inquiryFormSubscriptionIsInactive) {
      logDebugValue('INQUIRY FORM SUBSCRIPTION IS INACTIVE', inquiryFormSubscriptionIsInactive, {
        show: inquiryFormSubscriptionIsInactive
      });
      formErrorOccurred({
        message: 'Inquiry Form subscription is inactive',
        status: 400
      });
    } else {
      if (examSchedulerSubscriptionIsInactive) {
        logDebugValue('EXAM SCHEDULER SUBSCRIPTION IS INACTIVE', examSchedulerSubscriptionIsInactive, {
          show: examSchedulerSubscriptionIsInactive
        });
      }
    }

    var customCSSLibraryInput = window.$wave_FORM_ATTRIBUTES['data-default-css-library'];
    var isValidName = !!customCSSLibraryInput && !CONFIG.SETTINGS.DEFAULT_CSS_LIBRARY;
    logDebugValue('custom css library is being used:', customCSSLibraryInput, {
      show: !!customCSSLibraryInput
    });
    logDebugValue('invalid custom css library:', customCSSLibraryInput, {
      show: isValidName
    });
  }

  function formErrorOccurred(errorObj) {
    var fatal = errorObj && errorObj.fatal && errorObj.fatal === true;

    if (fatal) {
      console.error(errorObj);
    }

    if (UtilityService.isFunction(WaveInquiryForm.onFormRenderError)) {
      WaveInquiryForm.onFormRenderError(errorObj);
    }
  }

  function generateAppointmentConfirmationString() {
    return AppointmentScheduler.generateAppointmentString(FORM_DATA_MAP.appointment_scheduler.value, getLocationName());
  }
  /**
   * Whether the form should render the input based on whether the user has selected an appointment
   */


  function showFormDetailInputs() {
    var appointmentSchedulerIsShowing = CONFIG.SHOW.APPOINTMENT_SCHEDULER && CONFIG.SHOW.ALLOW_APPOINTMENT_SCHEDULER === true;
    var locationsAreHiddenWithBadDefault = CONFIG.SETTINGS.HIDE_LOCATIONS === true && CONFIG.SETTINGS.INVALID_DEFAULT_LOCATION === true;
    var apptValueExists = !!FORM_DATA_MAP.appointment_scheduler.value || FORM_DATA_MAP.appointment_call_me.value === true;
    var patientIsNotNew = FORM_DATA_MAP.patientStatus.value !== 'New Patient';
    return appointmentSchedulerIsShowing === false || patientIsNotNew || locationsAreHiddenWithBadDefault === true || apptValueExists;
  }

  function getLocationName() {
    var locationSelectorID = FORM_DATA_MAP.locations.value;
    var locationName = '';

    if (locationSelectorID) {
      var locationList = FORM_DATA_MAP.locations.options;
      var locationObject = locationList.filter(function (locationObj) {
        return locationObj.id === locationSelectorID;
      })[0];

      if (locationObject) {
        var qualifier = getLocationQualifier();
        locationName = qualifier + ' ' + locationObject['name'];
      }
    }

    return locationName;
  }

  function getLocationQualifier() {
    var validLocationQualifierMap = {
      'with': 'WITH',
      'in': 'IN',
      'at': 'AT'
    };
    var locationQualifierAttribute = window.$wave_FORM_ATTRIBUTES['data-appointment-confirmation-location-qualifier'];
    var selectedQualifierType = validLocationQualifierMap[locationQualifierAttribute] ? validLocationQualifierMap[locationQualifierAttribute] : validLocationQualifierMap['in'];
    return _getText('TEXT.' + selectedQualifierType, {
      object: CONSTANTS
    });
  }

  function resetForm() {
    if (CONFIG.SHOW.RESET_ALERT === true) {
      var answer = confirm(CONFIG.TEXT.RESET_ALERT);

      if (answer === true) {
        handleFormReset();
      }
    } else {
      handleFormReset();
    }
  }

  window.$wave_action_resetForm = resetForm;

  function changeLanguage(event) {
    if (event && event.srcElement) {
      var element = event.srcElement;
      var selectedLanguage = element.getAttribute('value');

      if (isValidLanguage(selectedLanguage) && _getLanguage() !== selectedLanguage) {
        CONFIG.LANGUAGE = selectedLanguage;
        renderForm(true);
      }
    }
  }

  window.$wave_action_changeLanguage = changeLanguage;

  function handleFormReset() {
    resetFormValues();
    CONFIG.IS_SUBMITTED = false;
    CONFIG.IS_DISABLED = false;

    if (UtilityService.isFunction(WaveInquiryForm.onFormReset)) {
      WaveInquiryForm.onFormReset();
    }

    renderForm();
  }

  function setElementDisability(element) {
    if (element) {
      if (CONFIG.IS_DISABLED === true) {
        element.setAttribute('disabled', true);
      } else {
        element.removeAttribute('disabled');
      }
    }
  }

  function resetFormValues() {
    FORM_RENDER_ORDER.forEach(function (formKey) {
      FORM_DATA_MAP[formKey].value = '';
      FORM_DATA_MAP[formKey].altValue = '';
    });
  }

  function resetAppointmentScheduler() {
    var apptSchedulerFormDataObj = FORM_DATA_MAP['appointment_scheduler'];
    apptSchedulerFormDataObj.value = undefined;
    var apptSchedulerCallMeFormDataObj = FORM_DATA_MAP['appointment_call_me'];
    apptSchedulerCallMeFormDataObj.value = undefined;
    renderForm();
  }

  window.resetAppointmentScheduler = resetAppointmentScheduler;

  function selectLocationByKeyValue(key, value) {
    if (key && value) {
      var locationsConfig = FORM_DATA_MAP['locations'];
      var locations = locationsConfig.options;

      if (locations && Array.isArray(locations) && locations.length > 0) {
        var selectedLocation = locations.filter(function (singleLocationObj) {
          return singleLocationObj[key] === value;
        })[0];

        if (selectedLocation && selectedLocation.id) {
          locationsConfig.value = selectedLocation.id;
          setTimeout(function () {
            resetAppointmentScheduler();
            renderForm();
          }, 1);
        }
      }
    }
  }

  window._selectLocationByKeyValue = selectLocationByKeyValue;

  function appointmentTimeClick(element) {
    var apptID = element.getAttribute('data-appt-id');

    if (!!apptID) {
      var parentElement = element.parentNode;
      var time = parentElement.getAttribute('data-row-time');
      var date = parentElement.getAttribute('data-date');
      var formDataObj = FORM_DATA_MAP['appointment_scheduler'];
      formDataObj.value = {
        Appt_ID: apptID,
        time: time,
        date: date
      };
      renderForm();
    }
  }

  window.appointmentTimeClick = appointmentTimeClick;

  function appointmentCallMe(element) {
    var formDataObj = FORM_DATA_MAP['appointment_call_me'];
    formDataObj.value = true;
    renderForm();
  }

  window.$wave_callMe = appointmentCallMe;

  function inputChanged(event, options) {
    options = options && _typeof(options) === 'object' ? options : {};
    var sourceElement = event.target;
    var newValue = sourceElement.value;
    var formMapID = sourceElement.getAttribute('data-map-id');
    var valueKey = sourceElement.getAttribute('data-value-key');

    if (!valueKey || valueKey === 'undefined') {
      valueKey = 'value';
    }

    if (formMapID) {
      var itemConfig = FORM_DATA_MAP[formMapID];

      if (itemConfig) {
        if (UtilityService.isFunction(itemConfig.onChange)) {
          itemConfig.onChange(newValue);
        }

        itemConfig[valueKey] = newValue;
        itemConfig.errorMessage = null;
      }
    }

    renderForm();
  }

  window.$wave_action_inputChanged = inputChanged;

  function onClick(event) {
    var isClickInside = event.target.className === 'popover-locations-list';

    if (!isClickInside) {
      $('[data-bs-toggle="popover"]').popover('hide');
    }
  }

  function showPopover(e) {
    document.addEventListener('click', onClick);
    $('[data-bs-toggle="popover"]').popover('toggle');
    e.stopPropagation();
  }

  window.$wave_action_showPopover = showPopover;

  function locationSelected(event, options) {
    //close popover
    $('[data-bs-toggle="popover"]').popover('hide');
    document.removeEventListener('click', onClick);
    options = options && _typeof(options) === 'object' ? options : {};
    var sourceElement = event.target;
    var newValue = sourceElement.attributes['data-value'].value;
    var valueKey = 'value';
    var itemConfig = FORM_DATA_MAP['locations'];

    if (itemConfig) {
      if (UtilityService.isFunction(itemConfig.onChange)) {
        itemConfig.onChange(newValue);
      }

      itemConfig[valueKey] = newValue;
      itemConfig.errorMessage = null;
    }

    renderForm();
  }

  window.$wave_action_locationSelected = locationSelected;

  function formIsValid() {
    var requiredFields = getRequiredFields();
    var totalErrors = 0;
    requiredFields.forEach(function (itemConfig) {
      itemConfig.errorMessage = null;
      var currentValue = itemConfig.value;

      if (itemConfig.value === 'Other' && !!itemConfig.hasAltValue) {
        currentValue = itemConfig.altValue;
      }

      var config = getSystemConfig(itemConfig);

      if (UtilityService.isFunction(itemConfig.validate)) {
        var customValidationResults = itemConfig.validate(config);

        if (customValidationResults !== true) {
          itemConfig.errorMessage = customValidationResults;
        }
      } else if (!currentValue) {
        if (itemConfig.defaultValue) {
          itemConfig.value = itemConfig.defaultValue;
        } else {
          var errorMessage = !!itemConfig.customRequiredMessage ? itemConfig.customRequiredMessage : _getText('TEXT.FIELD_IS_REQUIRED', {
            object: CONSTANTS
          });
          itemConfig.errorMessage = errorMessage;
        }
      }

      if (!!itemConfig.errorMessage) {
        totalErrors = totalErrors + 1;
      }
    });

    if (totalErrors > 0) {
      return totalErrors;
    } else {
      return true;
    }
  }

  function getSanitizedDatabaseObject() {
    var returnObj = {};
    var formItems = getFormItems();
    formItems.forEach(function (itemConfig) {
      var config = getSystemConfig(itemConfig);
      var isShowing = UtilityService.isFunction(itemConfig.show) ? itemConfig.show(config) : itemConfig.show;
      var isHiddenValue = itemConfig.hiddenValue && itemConfig.hiddenValue === true;
      var databaseKey = itemConfig.databaseKey;
      var value = itemConfig.value;

      if (FORM_DATA_MAP.reference.isOtherOption(itemConfig.value) && (!!itemConfig.altValue || itemConfig.altValue === '') && UtilityService.isString(itemConfig.altValue)) {
        var newValue = itemConfig.altValue;
        newValue = newValue.trim();
        newValue = newValue.substr(0, 100); //limit to 100 characters

        value = '(other) - ' + newValue;
      }

      if (UtilityService.isFunction(itemConfig.sanitize)) {
        value = itemConfig.sanitize(value);
      }

      if (!!itemConfig.defaultValue && !itemConfig.value) {
        value = itemConfig.defaultValue;
      }

      if (UtilityService.isInteger(itemConfig.characterLimit) && !!value && typeof value === 'string') {
        value = value.substr(0, itemConfig.characterLimit);
      }

      if (isShowing === true || isHiddenValue) {
        returnObj[databaseKey] = value;
      }
    });
    return returnObj;
  }

  function handleFormSubmission(status) {
    if (WaveInquiryForm && WaveInquiryForm.onFormSubmission && UtilityService.isFunction(WaveInquiryForm.onFormSubmission)) {
      var responseObject = {
        error: 'An unknown internal error occurred'
      };

      if (status && status === 200) {
        responseObject = {};
        var appointmentMessage;

        if (!!FORM_DATA_MAP.appointment_scheduler.value) {
          appointmentMessage = generateAppointmentConfirmationString();
        } else if (FORM_DATA_MAP.appointment_call_me.value === true) {
          appointmentMessage = 'Our office will call you to schedule an appointment';
        }

        if (appointmentMessage) {
          responseObject.appointmentMessage = appointmentMessage;
        }
      }

      WaveInquiryForm.onFormSubmission(responseObject);
    }

    if (CONFIG.SETTINGS.SUBMISSION_REDIRECT_URL) {
      var url = CONFIG.SETTINGS.SUBMISSION_REDIRECT_URL;
      var urlHasQuery = url.indexOf('?') > -1;
      var urlBeginning = urlHasQuery === true ? url.substring(0, url.indexOf('?')) : url;
      var parameters = {};

      if (urlHasQuery) {
        parameters = HTMLService.extractUrlParameters(url);
      }

      if (CONFIG.SETTINGS.REMOVE_URL_APPOINTMENT_MESSAGE !== true) {
        if (!!FORM_DATA_MAP.appointment_scheduler.value) {
          parameters['appointmentMessage'] = generateAppointmentConfirmationString();
        } else if (FORM_DATA_MAP.appointment_call_me.value === true) {
          parameters['appointmentMessage'] = 'Our office will call you to schedule an appointment';
        }
      }

      var urlEnding = HTMLService.objectToUrlParameters(parameters);
      document.location = "".concat(urlBeginning, "?").concat(urlEnding);
    }
  }

  function submitForm(event) {
    var formValidationResults = formIsValid();
    FORM_DATA_MAP.alertMessage.value = null;
    CONFIG.IS_DISABLED = false;

    if (formValidationResults === true) {
      CONFIG.IS_DISABLED = true;
      renderForm();
      var sanitizedObject = getSanitizedDatabaseObject();
      var options = {
        source: CONFIG.SETTINGS.SOURCE,
        sourceDetails: CONFIG.SETTINGS.SOURCE_DETAILS,
        language: _getLanguage(),
        formVersion: versionNumber
      };

      if (saveInProgress === false) {
        saveInProgress = true;
        DataService.saveToDatabase(sanitizedObject, getDoctorID(), options).then(function (response) {
          if (response.status === 200) {
            setSubmissionSuccess();
            var userHasSelectedAnAppointment = !!sanitizedObject.Appt_ID;

            if (userHasSelectedAnAppointment) {
              DataService.updateAppointmentData(sanitizedObject.Appt_ID, {}).then(function (response) {
                logSuperDebugValue('response', response);
              }, function (error) {
                console.error(error);
              });
            }
          } else {
            setSubmissionError();
          }

          handleFormSubmission(response.status);
          logSuperDebugValue('response', response);
          logSuperDebugValue('submission data', sanitizedObject);

          if (isTestMode()) {
            logSuperDebugValue('submission data [stringified]', JSON.stringify(sanitizedObject));
          }

          saveInProgress = false;
        }, function (error) {
          logSuperDebugValue('response error', error);
          setSubmissionError();
          handleFormSubmission();
          saveInProgress = false;
        });
      }
    } else {
      var YOU_HAVE = _getText('TEXT.YOU_HAVE', {
        object: CONSTANTS
      });

      var ERROR = _getText(formValidationResults > 1 ? 'TEXT.ERRORS' : 'TEXT.ERROR', {
        object: CONSTANTS
      });

      var TO_ADDRESS = _getText('TEXT.TO_ADDRESS', {
        object: CONSTANTS
      });

      FORM_DATA_MAP.alertMessage.value = "".concat(YOU_HAVE, " ").concat(formValidationResults, " ").concat(ERROR, " ").concat(TO_ADDRESS);
      renderForm();
    }
  }

  window.$wave_action_submitForm = submitForm;

  function setSubmissionSuccess() {
    CONFIG.IS_SUBMITTED = true;
    CONFIG.IS_DISABLED = false;
    renderForm();
    setTimeout(function () {
      var appElement = getAppForm();
      appElement.scrollIntoView();
      var apptElement = document.querySelector('.wave-completion-message-header');

      if (apptElement) {
        var waveSuccessElement = document.getElementById('WAVE-successMessage');
        var successMessageElement = waveSuccessElement.querySelector('p');
        var confirmClass = successMessageElement.getAttribute('class');
        var text = apptElement.innerHTML;
        var newApptConfirmElement = HTMLService.createElement('p', {
          className: confirmClass
        }, text);
        waveSuccessElement.appendChild(newApptConfirmElement);
        var apptContainerElement = document.getElementById('WAVE-appointment-scheduler');
        apptContainerElement.parentNode.removeChild(apptContainerElement);
      }
    }, 100);
    renderForm();
  }

  function setSubmissionError() {
    CONFIG.IS_DISABLED = false;
    FORM_DATA_MAP.alertMessage.value = _getText('SUBMISSION_ERROR_MESSAGE', {
      object: CONSTANTS.TEXT
    });
    renderForm();
  }

  function getRequiredFields() {
    return getFormItems().filter(function (itemConfig) {
      var config = getSystemConfig(itemConfig);
      var show = UtilityService.isFunction(itemConfig.show) ? itemConfig.show(config) : itemConfig.show;
      var required = UtilityService.isFunction(itemConfig.required) ? itemConfig.required(config) : itemConfig.required;
      return show === true && required === true;
    });
  }

  function getFormItems() {
    return FORM_RENDER_ORDER.map(function (key) {
      return FORM_DATA_MAP[key];
    }).filter(function (config) {
      return config.isFormItem === true;
    });
  }

  function resetFormHasLoadedValues() {
    FORM_RENDER_ORDER.forEach(function (key) {
      FORM_DATA_MAP[key].hasLoaded = false;
    });
  }

  function generateProgressTime(laterTime, startTime) {
    var msDifference = laterTime - startTime;
    return msDifference / 1000 + ' seconds';
  }

  function storeDoctorData(data) {
    window.$wave_DOCTOR_DATA = data;
  }

  function getDoctorData() {
    return window.$wave_DOCTOR_DATA;
  }

  function getAttributeConfigMap() {
    return ATTRIBUTE_CONFIG_MAP;
  }

  function isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  function convertQuotesAndFormatAsJson(item) {
    logSuperDebugValue('text to be converted', item);
    var replacedText = !!item && typeof item === 'string' && item.split(['&', 'quot', ';'].join('')).join('"');
    logSuperDebugValue('replacedText', replacedText);
    logSuperDebugValue('is json', isJson(replacedText));

    if (!!replacedText && isJson(replacedText)) {
      return JSON.parse(replacedText);
    } else {
      return false;
    }
  }

  function getFormattedMapData(doctorData) {
    var newValue = convertQuotesAndFormatAsJson(doctorData.map_data);

    if (_typeof(newValue) === 'object' && Object.keys(newValue).length > 0) {
      return newValue;
    } else {
      throw new Error('Map data is invalid');
    }
  }

  function getFormattedLocationData(doctorData) {
    var newLocations = convertQuotesAndFormatAsJson(doctorData.locations);
    logSuperDebugValue('newLocations', newLocations);
    logSuperDebugValue('doctorData.locations', doctorData.locations);
    var locations = UtilityService.isArray(newLocations) ? newLocations : [];

    if (locations && locations.length > 0) {
      locations = locations.map(function (locationObj) {
        if (locationObj && locationObj['name']) {
          locationObj['name'] = locationObj['name'].trim();
        }

        return locationObj;
      }).filter(function (locationObj) {
        return !!locationObj.name;
      });
    }

    return sortLocationData(locations);
  }

  function getFormattedCustomReferenceData(doctorData) {
    logSuperDebugValue('doctorData.customReferences', doctorData.customReferences);
    var newReferences = convertQuotesAndFormatAsJson(doctorData.customReferences);
    logSuperDebugValue('customReferences', newReferences);
    var customReferences = UtilityService.isArray(newReferences) ? newReferences : [];

    if (customReferences && customReferences.length > 0) {
      customReferences = customReferences.filter(function (item) {
        return UtilityService.isString(item, true);
      }).map(function (referenceString) {
        var maxStringLimit = 100;
        referenceString = referenceString.trim();

        if (referenceString.length > maxStringLimit) {
          referenceString = referenceString.substr(0, maxStringLimit);
        }

        return referenceString;
      });
    }

    return customReferences;
  }

  function getFormattedCustomAgeOptionsData(doctorData) {
    logSuperDebugValue('doctorData.customAgeOptions', doctorData.customAgeOptions);
    var newAgeOptions = convertQuotesAndFormatAsJson(doctorData.customAgeOptions);
    logSuperDebugValue('customAgeOptions', newAgeOptions);
    var customAgeOptions = UtilityService.isArray(newAgeOptions) ? newAgeOptions : [];

    if (customAgeOptions && customAgeOptions.length > 0) {
      customAgeOptions = customAgeOptions.filter(function (item) {
        return UtilityService.isString(item, true);
      }).map(function (ageOptionString) {
        var maxStringLimit = 100;
        ageOptionString = ageOptionString.trim();

        if (ageOptionString.length > maxStringLimit) {
          ageOptionString = ageOptionString.substr(0, maxStringLimit);
        }

        return ageOptionString;
      });
    }

    return customAgeOptions;
  }

  function isDemoMode() {
    return WaveInquiryForm.demoMode === true;
  }

  function isDebugMode() {
    return CONFIG.SETTINGS.DEBUG_MODE === 'true' || isSuperDebugMode();
  }

  function isSuperDebugMode() {
    return window.$wave_FORM_ATTRIBUTES['data-super-debug-mode'] === 'true';
  }
  /**
   *
   * @param {String} label
   * @param {*} [value]
   * @param {Object} [options]
   * @param {Boolean} [options.show]
   * @param {Boolean} [options.force]
   * @param {'warn', 'error'} [options.logType]
   */


  function logDebugValue(label, value, options) {
    setTimeout(function () {
      value = value === null || value === undefined ? '' : value;
      options = UtilityService.isObject(options) ? options : {};

      var _boolean3 = options.show === true || options.show === false ? options.show : true;

      var attributesExist = !!window.$wave_FORM_ATTRIBUTES && Object.keys(window.$wave_FORM_ATTRIBUTES).length > 0;
      var force = attributesExist ? window.$wave_FORM_ATTRIBUTES['data-debug-mode'] === 'true' : options.force === true;
      var logType = !!options.logType ? options.logType : 'log';

      if ((isDebugMode() === true || force === true) && _boolean3 === true) {
        var debugString = 'wave-inquiry-form:';
        console[logType](debugString, label, value);
      }
    });
  }

  function logSuperDebugValue(label, value, options) {
    if (isSuperDebugMode()) {
      options = UtilityService.isObject(options) ? options : {};
      options.force = true;
      logDebugValue(label, value, options);
    }
  }

  function sortLocationData(locations) {
    if (locations && locations.length > 1) {
      return locations.sort(function (a, b) {
        var aName = a.name;
        var bName = b.name;

        if (aName < bName) {
          return -1;
        } else if (aName > bName) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return locations;
    }
  }

  function isValidMapData(importedData) {
    if (importedData.centerCoordinates) {
      var centerCoordinates = importedData.centerCoordinates;

      if (centerCoordinates.zoom && centerCoordinates.lat && centerCoordinates.lng) {
        if (importedData.smallCoordinates) {
          var smallCoordinates = importedData.smallCoordinates;

          if (smallCoordinates.zoom && centerCoordinates.lat && centerCoordinates.lng) {
            if (importedData.locations && Array.isArray(importedData.locations)) {
              if (importedData.locations.length > 0) {
                var invalidLocations = importedData.locations.filter(function (location) {
                  var allFieldsArePresent = location.coordinates && location.coordinates.zoom && location.coordinates.lat && location.coordinates.lng && location.name && location.address;
                  var idIsPresent = !!location.id;

                  if (importedData.locations.length === 1) {
                    return allFieldsArePresent === false;
                  } else {
                    return allFieldsArePresent === false && idIsPresent === false;
                  }
                });

                if (invalidLocations.length > 0) {
                  throw Error('map_data.locations {coordinates: {zoom, lat, lng}, name, id, address} contains at least one invalid location: ' + JSON.stringify(invalidLocations));
                } else {
                  return true;
                }
              } else {
                throw Error('map_data.locations must contain at least one map point object');
              }
            } else {
              throw Error('map_data.locations is required, and it must be an array');
            }
          } else {
            throw Error('map_data.smallCoordinates requires zoom, lat, and lng values');
          }
        } else {
          throw Error('map_data.smallCoordinates is required, and it must be an object');
        }
      } else {
        throw Error('map_data.centerCoordinates requires zoom, lat, and lng values');
      }
    } else {
      throw Error('map_data.centerCoordinates is required, and it must be an object');
    }
  }
  /**
   *
   * @param {Object} doctorData
   * @param {'1' | '0'} doctorData.flagInquiryFormGoogleMaps
   */


  function setGoogleMapSettings(doctorData) {
    CONFIG.SHOW.GOOGLE_MAPS = doctorData.flagInquiryFormGoogleMaps === '1';
    var shouldBeShown = CONFIG.SHOW.GOOGLE_MAPS === true && CONFIG.SHOW.GOOGLE_MAPS_LOCAL === true;
    var mapData = null;

    if (shouldBeShown === true) {
      try {
        mapData = getFormattedMapData(doctorData);
        isValidMapData(mapData);
        FORM_DATA_MAP.google_maps.options = mapData;
      } catch (e) {
        logDebugValue('Map is set to be shown, but the map data is invalid.', '', {
          logType: 'warn'
        });
        logSuperDebugValue(e, null, {
          logType: 'error'
        });
        CONFIG.SHOW.GOOGLE_MAPS = false;
      }
    }
  }
  /**
   *
   * @param {Object} doctorData
   * @param {'1', '0'} doctorData.flagApptScheduler
   * @param {'1', '0'} doctorData.settingApptSchedulerShowBooked
   * @param {'1', '0'} doctorData.settingApptSchedulerShowClosedDays
   * @param {'1', '0'} doctorData.settingApptSchedulerHideTodaysAppts
   * @param {Number} doctorData.settingApptSchedulerHoursFromNow
   */


  function setExamSchedulerSettings(doctorData) {
    var showAppointmentScheduler = doctorData.flagApptScheduler === '1';

    if (isDemoMode()) {
      showAppointmentScheduler = true;
    }

    CONFIG.SHOW.ALLOW_APPOINTMENT_SCHEDULER = showAppointmentScheduler === true;

    if (CONFIG.SHOW.ALLOW_APPOINTMENT_SCHEDULER) {
      var showUnavailableAppts = doctorData.settingApptSchedulerShowBooked === '1';
      var showPlaceholderAppts = doctorData.settingApptSchedulerShowClosedDays === '1';
      var showTodaysAppts = doctorData.settingApptSchedulerHideTodaysAppts !== '1';
      var hoursFromNow = isNaN(doctorData.settingApptSchedulerHoursFromNow) === false ? Number(doctorData.settingApptSchedulerHoursFromNow) : 1;
      CONFIG.SHOW.UNAVAILABLE_APPOINTMENTS = showUnavailableAppts === true;
      CONFIG.SHOW.PLACEHOLDER_APPOINTMENTS = showPlaceholderAppts === true;

      if (CONFIG.SHOW.TODAYS_APPOINTMENTS === false) {
        CONFIG.SHOW.TODAYS_APPOINTMENTS = showTodaysAppts === true;
      }

      CONFIG.SETTINGS.TODAY_APPOINTMENT_BUFFER_HOURS = hoursFromNow;
      CONFIG.SETTINGS.SKIP_EMPTY_APPT_WEEKS = doctorData.settingApptSchedulerSkipEmptyApptWeeks === '1';
    }

    var openTime = '09:00:00';
    var closeTime = '17:00:00';
    var increment = 15;
    FORM_DATA_MAP.appointment_scheduler.data = {
      openTime: openTime,
      closeTime: closeTime,
      increment: increment
    };
  }
  /**
   *
   * @param {Object} doctorData
   * @param {Array} doctorData.customReferences
   */


  function setCustomReferenceSettings(doctorData) {
    var customReferences = [];

    try {
      customReferences = getFormattedCustomReferenceData(doctorData);
    } catch (error) {
      logDebugValue('No custom references, or invalid custom reference data');
    }

    if (customReferences && UtilityService.isArray(customReferences) && customReferences.length > 0) {
      var eachChildIsString = customReferences.filter(function (item) {
        return UtilityService.isString(item);
      }).length === customReferences.length;
      var eachChildIsObject = customReferences.filter(function (item) {
        return UtilityService.isObject(item);
      }).length === customReferences.length;

      if ((eachChildIsObject || eachChildIsString) && transformReferralMethods(customReferences).length > 0) {
        CONSTANTS.REFERRAL_METHODS = customReferences;
        logDebugValue('custom references are being used', customReferences);
      }
    }
  }
  /**
   *
   * @param {Object} doctorData
   * @param {Array} doctorData.customAgeOptions
   */


  function setCustomAgeOptionsSettings(doctorData) {
    var customAgeOptions = [];

    try {
      customAgeOptions = getFormattedCustomAgeOptionsData(doctorData);
    } catch (error) {
      logDebugValue('No custom age options, or invalid custom age option data');
    }

    if (customAgeOptions && UtilityService.isArray(customAgeOptions) && customAgeOptions.length > 0) {
      FORM_DATA_MAP.age.options = customAgeOptions;
    }
  }
  /**
   *
   * @param {Object} doctorData
   * @param {'1' | '0'} doctorData.flagInquiryForm
   */


  function setInquiryFormSettings(doctorData) {
    var showInquiryForm = doctorData.flagInquiryForm === '1';

    if (isDemoMode()) {
      showInquiryForm = true;
    }

    CONFIG.SHOW.INQUIRY_FORM = showInquiryForm === true;
  }

  function setDefaultPatientStatus() {
    if (CONFIG.SETTINGS.DEFAULT_PATIENT_STATUS) {
      var possibleStatusOptions = getPatientStatusOptionsList();

      if (possibleStatusOptions.indexOf(CONFIG.SETTINGS.DEFAULT_PATIENT_STATUS) > -1) {
        FORM_DATA_MAP.patientStatus.defaultValue = CONFIG.SETTINGS.DEFAULT_PATIENT_STATUS;
        FORM_DATA_MAP.patientStatus.value = CONFIG.SETTINGS.DEFAULT_PATIENT_STATUS;
        logDebugValue('default patient status was set to', CONFIG.SETTINGS.DEFAULT_PATIENT_STATUS);
      }
    }
  }

  function getPatientStatusOptionsList() {
    var patientStatusOptions = _getText('PATIENT_CURRENT_STATUS', {
      object: CONSTANTS
    });

    return patientStatusOptions.map(function (statusOption) {
      if (UtilityService.isObject(statusOption)) {
        return statusOption.value;
      } else {
        return statusOption;
      }
    });
  }

  function setLocationSettings(doctorData) {
    var locationsAreHidden = CONFIG.SETTINGS.HIDE_LOCATIONS === true;
    var defaultLocationIsSet = !!window.$wave_FORM_ATTRIBUTES['data-default-location'];
    var noDefaultLocationIsWanted = window.$wave_FORM_ATTRIBUTES['data-no-default-location'] === 'true';
    var locations = [];

    try {
      locations = getFormattedLocationData(doctorData);
    } catch (e) {
      logDebugValue('No locations, or invalid location data');
    }

    FORM_DATA_MAP.locations.options = locations;
    logDebugValue('parsed locations', locations);

    if (Array.isArray(locations) && locations.length > 0) {
      if (typeof CONFIG.SETTINGS.HIDE_LOCATION_OPTIONS === 'string' && CONFIG.SETTINGS.HIDE_LOCATION_OPTIONS.length > 0) {
        var locationsToBeHidden = CONFIG.SETTINGS.HIDE_LOCATION_OPTIONS.split('||');
        logDebugValue('Some location options are expected to be hidden', locationsToBeHidden);

        if (locationsToBeHidden.length > 0) {
          locationsToBeHidden = locationsToBeHidden.map(function (locationName) {
            return locationName.trim();
          });

          var currentLocationOptions = _toConsumableArray(locations);

          locations = [];
          FORM_DATA_MAP.locations.options = [];
          var hiddenLocations = [];
          currentLocationOptions.forEach(function (locationObj) {
            if (locationObj && locationObj.name) {
              if (locationsToBeHidden.includes(locationObj.name.trim()) === false) {
                locations.push(locationObj);
              } else {
                hiddenLocations.push(locationObj);
              }
            }
          });
          FORM_DATA_MAP.google_maps.hiddenLocations = hiddenLocations;
          var hiddenLocationNames = hiddenLocations.map(function (locationObj) {
            return locationObj.name;
          });
          logDebugValue("".concat(locationsToBeHidden.length, " location").concat(locationsToBeHidden.length === 1 ? '' : 's', " (").concat(locationsToBeHidden.map(function (name) {
            return '"' + name + '"';
          }).join(', '), ") ").concat(locationsToBeHidden.length === 1 ? 'was' : 'were', " entered as locations to be hidden and ").concat(hiddenLocationNames.length, " location").concat(hiddenLocationNames.length === 1 ? '' : 's', " ").concat(hiddenLocationNames.length === 1 ? 'was' : 'were', " hidden").concat(hiddenLocationNames.length > 0 ? ': ' + hiddenLocationNames.map(function (name) {
            return '"' + name + '"';
          }).join(', ') + '.' : '.'));
          FORM_DATA_MAP.locations.options = locations;

          if (FORM_DATA_MAP.locations.options.length === 0) {
            logDebugValue('all locations are being hidden');
            CONFIG.SETTINGS.HIDE_LOCATIONS = true;
            locationsAreHidden = true;
          }
        }
      }

      if (locationsAreHidden) {
        if (defaultLocationIsSet) {
          logDebugValue('locations are hidden, but a default location has been set');

          if (noDefaultLocationIsWanted) {
            logDebugValue('locations are hidden, but both the default location is set and the no-default-location setting is also set');
          }
        } else {
          logDebugValue('locations are hidden, and no default location has been set');
        }
      } else {
        if (defaultLocationIsSet && noDefaultLocationIsWanted) {
          logDebugValue('the "data-default-location" and "data-no-default-location" settings are both set');
        } else if (noDefaultLocationIsWanted) {
          logDebugValue('No default location is set');
        } else if (defaultLocationIsSet) {
          logDebugValue('Default location is set');
        }
      }

      var position = 0;
      var isValidLocation = false;

      if (defaultLocationIsSet) {
        var defaultLocationValue = CONFIG.SETTINGS.DEFAULT_LOCATION;
        logDebugValue('default location: ', defaultLocationValue);
        var isNumber = isNaN(defaultLocationValue) === false;
        var isString = typeof defaultLocationValue === 'string';
        var locationSettings;

        if (isNumber || isString) {
          if (isNumber === false && isString) {
            FORM_DATA_MAP.locations.options.forEach(function (locationObj, i) {
              var name = locationObj.name;

              if (name === defaultLocationValue) {
                locationSettings = i;
                isValidLocation = true;
              }
            });
          } else {
            locationSettings = defaultLocationValue - 1;
            isValidLocation = true;
          }
        }

        logDebugValue('The default location match a stored value: ', isValidLocation);

        if (locationsAreHidden === true && isValidLocation === true || locationsAreHidden === false && locationSettings && !!FORM_DATA_MAP.locations.options[locationSettings]) {
          position = locationSettings;
        }
      }

      if (defaultLocationIsSet === false && noDefaultLocationIsWanted === true) {
        position = null;
      }

      if (position !== null && (locationsAreHidden === true && defaultLocationIsSet === true && isValidLocation === true || locationsAreHidden === false)) {
        FORM_DATA_MAP.locations.value = FORM_DATA_MAP.locations.options[position].id;
      } else {
        FORM_DATA_MAP.locations.value = null;
        CONFIG.SETTINGS.INVALID_DEFAULT_LOCATION = true;
        logDebugValue('locations are hidden and no default location was set. The appointment scheduler will be hidden until you enter a valid value in the "data-default-location" field or un-hide the locations.', null, {
          logType: 'warn'
        });
      }
    } else {
      logDebugValue('No locations were found');
    }
  }

  function filterGoogleMapLocations() {
    var hiddenLocations = FORM_DATA_MAP.google_maps.hiddenLocations;
    var mapData = FORM_DATA_MAP.google_maps.options;

    var mapLocations = _toConsumableArray(mapData.locations);

    var hiddenLocationIds = hiddenLocations.map(function (locationObj) {
      return locationObj.id;
    });
    mapData.locations = [];
    mapLocations.forEach(function (mapLocationObj) {
      if (mapLocationObj && mapLocationObj.id) {
        if (hiddenLocationIds.includes(mapLocationObj.id) === false) {
          mapData.locations.push(mapLocationObj);
        }
      }
    });
  }

  function checkDataReferencesLocationSettings(attributeData) {
    if (attributeData['data-references-input-before-name'] === 'true') {
      FORM_RENDER_ORDER.splice(FORM_RENDER_ORDER.indexOf('reference'), 1);
      FORM_RENDER_ORDER.splice(FORM_RENDER_ORDER.indexOf('firstName'), 0, 'reference');
    }
  }

  function checkFakeDataSettings(attributeData) {
    if (attributeData['data-fake-data'] === 'true') {
      FORM_DATA_MAP.appointment_call_me.value = true;
      FORM_DATA_MAP.firstName.value = 'Test';
      FORM_DATA_MAP.lastName.value = 'Test';
      FORM_DATA_MAP.email.value = 'test@test.com';
      FORM_DATA_MAP.phone.value = '1231231234';
    }
  }

  function getValidLanguages() {
    return CONSTANTS.VALID_LANGUAGES;
  }

  function isValidLanguage(language) {
    return getValidLanguages().includes(language);
  }

  function checkLanguageSettings(attributeData) {
    var selectedLanguage = getFormSettingsAttribute('data-language');

    if (UtilityService.isString(selectedLanguage)) {
      selectedLanguage = selectedLanguage.toLowerCase();

      if (isValidLanguage(selectedLanguage)) {
        CONFIG.LANGUAGE = selectedLanguage;
        logDebugValue('language has been set', CONFIG.LANGUAGE);
      }
    }

    var selectedLanguageOptions = getFormSettingsAttribute('data-language-options');

    if (selectedLanguageOptions) {
      logDebugValue('User has entered language options', selectedLanguageOptions);
      selectedLanguageOptions = selectedLanguageOptions.toLowerCase().split(',').map(function (item) {
        return item.trim();
      });
      var validSelectedLanguageOptions = selectedLanguageOptions.filter(function (option) {
        return isValidLanguage(option);
      });
      var languageOptionsObj = {};
      validSelectedLanguageOptions.forEach(function (language) {
        languageOptionsObj[language] = true;
      });
      var uniqueAndValidLanguageOptions = Object.keys(languageOptionsObj);

      if (uniqueAndValidLanguageOptions.length > 1) {
        logDebugValue('found multiple valid language options', uniqueAndValidLanguageOptions);
        var languageMap = {
          english: 'English',
          spanish: 'Español',
          french: 'Français'
        };
        CONFIG.LANGUAGE_OPTIONS = uniqueAndValidLanguageOptions.map(function (language) {
          return {
            value: language,
            text: languageMap[language]
          };
        });
      } else if (uniqueAndValidLanguageOptions.length === 1) {
        logDebugValue('Only one language option was found', uniqueAndValidLanguageOptions);
      } else {
        logDebugValue('found no language options that met the options:', getValidLanguages());
      }
    }
  }
  /**
   *
   * @param {String} position
   * @param {Object} [options]
   * @param {Object} [options.object]
   * @returns {*}
   * @private
   */


  function _getText(position, options) {
    options = UtilityService.isObject(options) ? options : {};
    var object = UtilityService.isObject(options.object) ? options.object : CONFIG;
    var language = CONFIG.LANGUAGE;
    var value = extractValueFromObjectByString(object, position);

    if (UtilityService.isObject(value)) {
      return value[language];
    } else {
      return value;
    }
  }

  exports._getText = _getText;

  function _getLanguage() {
    return CONFIG.LANGUAGE;
  }

  exports._getLanguage = _getLanguage;
  /**
   *
   * @param {Object} object
   * @param {String} location
   * @param {Object} [options]
   * @param {String} [options.incompleteReturn] - Will return a default value (incompleteReturn) if there are still keys left
   * @param {Boolean} [options.logEmptyValues] - log in the console if a return value is empty
   * @param {Boolean} [options.originalString] [hidden] - This is a manually set value for the first time the function is called
   * @returns {*}
   */

  function extractValueFromObjectByString(object, location, options) {
    options = UtilityService.isObject(options) ? options : {};
    options.originalString = !!options.originalString ? options.originalString : location;
    var keys = UtilityService.isString(location) ? location.split('.') : [];
    var nextItem = keys[0];
    keys.splice(0, 1);
    var remainingItems = keys.join('.');

    if (nextItem && UtilityService.isObject(object)) {
      var itemValue = object[nextItem];

      if (UtilityService.isObject(itemValue)) {
        return extractValueFromObjectByString(itemValue, remainingItems, options);
      } else {
        if (options.logEmptyValues === true && !itemValue) {
          console.log('BLANK VALUE: (' + options.originalString + ': ' + (itemValue || 'UNDEFINED') + ')');
        }

        return itemValue;
      }
    } else {
      if (keys.length > 0 && UtilityService.isString(options.incompleteReturn)) {
        return options.incompleteReturn;
      } else {
        return object;
      }
    }
  }

  UtilityService.extractValueFromObjectByString = extractValueFromObjectByString;

  function replaceObjectKeyValues(objectToBeUpdated, configObj, level) {
    var keys = Object.keys(configObj);
    keys.forEach(function (key) {
      var value = configObj[key];

      if (UtilityService.isObject(value)) {
        if (UtilityService.isObject(objectToBeUpdated[key]) === false) {
          objectToBeUpdated[key] = value;
        } else {
          objectToBeUpdated[key] = replaceObjectKeyValues(objectToBeUpdated[key], value, level + 1);
        }
      } else {
        objectToBeUpdated[key] = configObj[key];
      }
    });
    return objectToBeUpdated;
  }

  function getSystemConfig(itemConfig) {
    return {
      config: CONFIG,
      attributes: window.$wave_FORM_ATTRIBUTES,
      doctor_data: getDoctorData(),
      map_data: FORM_DATA_MAP,
      self: itemConfig
    };
  }
  /**
   *
   * @param {Boolean} [reRender=false]
   */


  function renderForm(reRender) {
    reRender = reRender === true;

    if (CONFIG.FORM_HAS_RENDERED !== true || reRender === true) {
      insertForm(reRender);

      if (UtilityService.isFunction(WaveInquiryForm.onFormRender)) {
        WaveInquiryForm.onFormRender();
      }
    } else {
      setObjectVisibility();
    }
  }

  function insertForm(reRender) {
    var waveForm = document.getElementById(getAppID());
    FORM_DATA_MAP['google_maps'].hasLoaded = false;
    var content = FORM_RENDER_ORDER.map(function (key, index) {
      var itemConfig = FORM_DATA_MAP[key];
      var tag = itemConfig.tag,
          attributes = itemConfig.attributes,
          children = itemConfig.children;

      if (index > 0) {
        return "\n                    <".concat(tag, " ").concat(generateElementAttributes(attributes), ">\n                        ").concat(UtilityService.extractValue(children), "\n                    </").concat(tag, ">\n                ");
      }
    }).filter(function (content) {
      return !!content;
    }).join('');
    waveForm.innerHTML = "\n            <".concat(FORM_DATA_MAP.form.tag, " ").concat(generateElementAttributes(FORM_DATA_MAP.form.attributes), ">\n                ").concat(content, "\n            </").concat(FORM_DATA_MAP.form.tag, ">\n        ");
    CONFIG.FORM_HAS_RENDERED = true;
    setObjectVisibility();
  }

  function setObjectVisibility() {
    FORM_RENDER_ORDER.forEach(function (itemName) {
      var itemConfig = FORM_DATA_MAP[itemName];

      if (UtilityService.isFunction(itemConfig.onReRender)) {
        itemConfig.onReRender();
      }
    });
  }

  function generateElementAttributes(attributesObj) {
    var keys = Object.keys(attributesObj);
    var string = '';
    keys.forEach(function (key) {
      var value = UtilityService.extractValue(attributesObj[key]);
      string = "".concat(string, " ").concat(key, "=\"").concat(value, "\"");
    });
    return string;
  }

  function saveFormAttributes() {
    var form = getAppForm();

    if (form) {
      window.$wave_FORM_ATTRIBUTES = HTMLService.extractAttributesFromElement(form);
      logDebugValue('saved form attributes', window.$wave_FORM_ATTRIBUTES, {
        force: true
      });
    }
  }

  function getFormSettingsAttribute(key) {
    var attributes = getAttributeSettings();
    return attributes && attributes[key];
  }

  function getAttributeSettings() {
    return window.$wave_FORM_ATTRIBUTES;
  }

  function getDoctorID() {
    return getFormSettingsAttribute('data-doctor-id');
  }

  function getAppID() {
    return !!CONFIG.CUSTOM_ID ? CONFIG.CUSTOM_ID : CONSTANTS.APP_FORM_ID;
  }

  function isTestMode() {
    var attributes = getAttributeSettings();
    return !!(attributes && attributes['data-test-mode'] && attributes['data-test-mode'] === 'true');
  }

  function getAppForm(inputID) {
    var id = getAppID();

    if (!!inputID) {
      id = inputID;
    }

    window.$wave_formID = id;
    return document.getElementById(id);
  }

  function inquiryFormIDExists(inputID) {
    return !!getAppForm(inputID);
  }

  function transformReferralMethods(methods) {
    if (UtilityService.isArray(methods)) {
      return methods.map(function (method) {
        if (UtilityService.isObject(method)) {
          var selectedLanguage = CONFIG.LANGUAGE;
          var defaultLanguage = 'english';
          var methodKeys = Object.keys(method);
          var value = '';
          var text = '';

          if (methodKeys.length > 0) {
            if (methodKeys.includes('value')) {
              value = method.value;
            } else if (methodKeys.includes(selectedLanguage)) {
              value = method[selectedLanguage];
            } else if (methodKeys.includes(defaultLanguage)) {
              value = method[defaultLanguage];
            } else {
              return '';
            }

            if (methodKeys.includes('text')) {
              text = method.text;
            } else if (methodKeys.includes(selectedLanguage)) {
              text = method[selectedLanguage];
            } else if (methodKeys.includes(defaultLanguage)) {
              text = method[defaultLanguage];
            } else if (!!value) {
              text = value;
            }

            return {
              value: value,
              text: text
            };
          } else {
            return '';
          }
        } else {
          return method;
        }
      }).filter(function (method) {
        return !!method;
      });
    } else {
      return [];
    }
  }

  return exports;
}();

window.$wave_WaveInquiryForm = WaveInquiryForm;
/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(void 0, function () {
  "use strict";

  var t = {
    find: function find(t) {
      var _ref5;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref5 = []).concat.apply(_ref5, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref6;

      return (_ref6 = []).concat.apply(_ref6, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode;

      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
        n.matches(e) && i.push(n), n = n.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    }
  },
      e = function e(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      i = function i(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i2 = t.getAttribute("href");

      if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
      _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#" + _i2.split("#")[1]), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
    }

    return e;
  },
      n = function n(t) {
    var e = i(t);
    return e && document.querySelector(e) ? e : null;
  },
      s = function s(t) {
    var e = i(t);
    return e ? document.querySelector(e) : null;
  },
      o = function o(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      r = function r(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      a = function a(e) {
    return r(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null;
  },
      l = function l(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var s = i[n],
          o = e[n],
          a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(s).test(a)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(a, "\" but expected type \"").concat(s, "\"."));
    });
  },
      c = function c(t) {
    return !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility");
  },
      h = function h(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      d = function d(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e2 = t.getRootNode();

      return _e2 instanceof ShadowRoot ? _e2 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? d(t.parentNode) : null;
  },
      u = function u() {},
      f = function f(t) {
    return t.offsetHeight;
  },
      p = function p() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      m = [],
      g = function g() {
    return "rtl" === document.documentElement.dir;
  },
      _ = function _(t) {
    var e;
    e = function e() {
      var e = p();

      if (e) {
        var _i3 = t.NAME,
            _n2 = e.fn[_i3];
        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
          return e.fn[_i3] = _n2, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", function () {
      m.forEach(function (t) {
        return t();
      });
    }), m.push(e)) : e();
  },
      b = function b(t) {
    "function" == typeof t && t();
  },
      v = function v(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!i) return void b(t);

    var n = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var s = !1;

    var r = function r(_ref7) {
      var i = _ref7.target;
      i === e && (s = !0, e.removeEventListener("transitionend", r), b(t));
    };

    e.addEventListener("transitionend", r), setTimeout(function () {
      s || o(e);
    }, n);
  },
      y = function y(t, e, i, n) {
    var s = t.indexOf(e);
    if (-1 === s) return t[!i && n ? t.length - 1 : 0];
    var o = t.length;
    return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
  },
      w = /[^.]*(?=\..*)\.|.*/,
      E = /\..*/,
      A = /::\d+$/,
      T = {};

  var O = 1;
  var C = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      k = /^(mouseenter|mouseleave)/i,
      L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function x(t, e) {
    return e && "".concat(e, "::").concat(O++) || t.uidEvent || O++;
  }

  function D(t) {
    var e = x(t);
    return t.uidEvent = e, T[e] = T[e] || {}, T[e];
  }

  function S(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s2 = 0, _o = n.length; _s2 < _o; _s2++) {
      var _o2 = t[n[_s2]];
      if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
    }

    return null;
  }

  function I(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = M(t);
    return L.has(o) || (o = t), [n, s, o];
  }

  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), k.test(e)) {
      var _t2 = function _t2(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t2(n) : i = _t2(i);
    }

    var _I = I(e, i, n),
        _I2 = _slicedToArray(_I, 3),
        o = _I2[0],
        r = _I2[1],
        a = _I2[2],
        l = D(t),
        c = l[a] || (l[a] = {}),
        h = S(c, r, o ? i : null);

    if (h) return void (h.oneOff = h.oneOff && s);
    var d = x(r, e.replace(w, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a2 = o.length; _a2--;) {
            if (o[_a2] === _r) return s.delegateTarget = _r, n.oneOff && P.off(t, s.type, e, i), i.apply(_r, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function j(t, e, i, n, s) {
    var o = S(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function M(t) {
    return t = t.replace(E, ""), C[t] || t;
  }

  var P = {
    on: function on(t, e, i, n) {
      N(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      N(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _I3 = I(e, i, n),
          _I4 = _slicedToArray(_I3, 3),
          s = _I4[0],
          o = _I4[1],
          r = _I4[2],
          a = r !== e,
          l = D(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void j(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n3 = s[o];
              j(t, e, i, _n3.originalHandler, _n3.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (i) {
        var n = i.replace(A, "");

        if (!a || e.includes(n)) {
          var _e3 = h[i];
          j(t, l, r, _e3.originalHandler, _e3.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = p(),
          s = M(e),
          o = e !== s,
          r = L.has(s);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return i[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  },
      H = new Map();
  var R = {
    set: function set(t, e, i) {
      H.has(t) || H.set(t, new Map());
      var n = H.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return H.has(t) && H.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!H.has(t)) return;
      var i = H.get(t);
      i["delete"](e), 0 === i.size && H["delete"](t);
    }
  };

  var B =
  /*#__PURE__*/
  function () {
    function B(t) {
      _classCallCheck(this, B);

      (t = a(t)) && (this._element = t, R.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(B, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        R.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        v(t, e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return R.get(t, this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.2";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs." + this.NAME;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return "." + this.DATA_KEY;
      }
    }]);

    return B;
  }();

  var W =
  /*#__PURE__*/
  function (_B) {
    _inherits(W, _B);

    function W() {
      _classCallCheck(this, W);

      return _possibleConstructorReturn(this, _getPrototypeOf(W).apply(this, arguments));
    }

    _createClass(W, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            i = this._triggerCloseEvent(e);

        null === i || i.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return s(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return P.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this2 = this;

        t.classList.remove("show");
        var e = t.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement(t);
        }, t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.remove(), P.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = W.getOrCreateInstance(this);
          "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }]);

    return W;
  }(B);

  P.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', W.handleDismiss(new W())), _(W);

  var q =
  /*#__PURE__*/
  function (_B2) {
    _inherits(q, _B2);

    function q() {
      _classCallCheck(this, q);

      return _possibleConstructorReturn(this, _getPrototypeOf(q).apply(this, arguments));
    }

    _createClass(q, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = q.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "button";
      }
    }]);

    return q;
  }(B);

  function z(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function $(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    q.getOrCreateInstance(e).toggle();
  }), _(q);
  var U = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + $(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + $(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = z(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return z(t.getAttribute("data-bs-" + $(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      F = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      V = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      K = "next",
      X = "prev",
      Y = "left",
      Q = "right",
      G = {
    ArrowLeft: Q,
    ArrowRight: Y
  };

  var Z =
  /*#__PURE__*/
  function (_B3) {
    _inherits(Z, _B3);

    function Z(e, i) {
      var _this3;

      _classCallCheck(this, Z);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Z).call(this, e)), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(i), _this3._indicatorsElement = t.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(Z, [{
      key: "next",
      value: function next() {
        this._slide(K);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && c(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(X);
      }
    }, {
      key: "pause",
      value: function pause(e) {
        e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(e) {
        var _this4 = this;

        this._activeElement = t.findOne(".active.carousel-item", this._element);

        var i = this._getItemIndex(this._activeElement);

        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(e);
        });
        if (i === e) return this.pause(), void this.cycle();
        var n = e > i ? K : X;

        this._slide(n, this._items[e]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, F, {}, U.getDataAttributes(this._element), {}, "object" == _typeof(t) ? t : {}), l("carousel", t, V), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Q : Y);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && P.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), P.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var e = function e(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? _this6._pointerEvent || (_this6.touchStartX = t.touches[0].clientX) : _this6.touchStartX = t.clientX;
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            n = function n(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        t.find(".carousel-item img", this._element).forEach(function (t) {
          P.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), P.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = G[t.key];
        e && (t.preventDefault(), this._slide(e));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(e) {
        return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === K;
        return y(this._items, e, i, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(e, i) {
        var n = this._getItemIndex(e),
            s = this._getItemIndex(t.findOne(".active.carousel-item", this._element));

        return P.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: i,
          from: s,
          to: n
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          var _i4 = t.findOne(".active", this._indicatorsElement);

          _i4.classList.remove("active"), _i4.removeAttribute("aria-current");

          var _n4 = t.find("[data-bs-target]", this._indicatorsElement);

          for (var _t3 = 0; _t3 < _n4.length; _t3++) {
            if (Number.parseInt(_n4[_t3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
              _n4[_t3].classList.add("active"), _n4[_t3].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var e = this._activeElement || t.findOne(".active.carousel-item", this._element);
        if (!e) return;
        var i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(e, i) {
        var _this7 = this;

        var n = this._directionToOrder(e),
            s = t.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(s),
            r = i || this._getItemByOrder(n, s),
            a = this._getItemIndex(r),
            l = Boolean(this._interval),
            c = n === K,
            h = c ? "carousel-item-start" : "carousel-item-end",
            d = c ? "carousel-item-next" : "carousel-item-prev",
            u = this._orderToDirection(n);

        if (r && r.classList.contains("active")) return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(r, u).defaultPrevented) return;
        if (!s || !r) return;
        this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;

        var p = function p() {
          P.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a
          });
        };

        if (this._element.classList.contains("slide")) {
          r.classList.add(d), f(r), s.classList.add(h), r.classList.add(h);

          var _t4 = function _t4() {
            r.classList.remove(h, d), r.classList.add("active"), s.classList.remove("active", d, h), _this7._isSliding = !1, setTimeout(p, 0);
          };

          this._queueCallback(_t4, s, !0);
        } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, p();

        l && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Q, Y].includes(t) ? g() ? t === Y ? X : K : t === Y ? K : X : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [K, X].includes(t) ? g() ? t === X ? Y : Q : t === X ? Q : Y : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = Z.getOrCreateInstance(t, e);
        var n = i._config;
        "object" == _typeof(e) && (n = _objectSpread({}, n, {}, e));
        var s = "string" == typeof e ? e : n.slide;
        if ("number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Z.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = s(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread({}, U.getDataAttributes(e), {}, U.getDataAttributes(this)),
            n = this.getAttribute("data-bs-slide-to");

        n && (i.interval = !1), Z.carouselInterface(e, i), n && Z.getInstance(e).to(n), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return F;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }]);

    return Z;
  }(B);

  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", function () {
    var e = t.find('[data-bs-ride="carousel"]');

    for (var _t5 = 0, _i5 = e.length; _t5 < _i5; _t5++) {
      Z.carouselInterface(e[_t5], Z.getInstance(e[_t5]));
    }
  }), _(Z);
  var J = {
    toggle: !0,
    parent: ""
  },
      tt = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var et =
  /*#__PURE__*/
  function (_B4) {
    _inherits(et, _B4);

    function et(e, i) {
      var _this8;

      _classCallCheck(this, et);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(et).call(this, e)), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(i), _this8._triggerArray = t.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this8._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this8._element.id, "\"]"));
      var s = t.find('[data-bs-toggle="collapse"]');

      for (var _e4 = 0, _i6 = s.length; _e4 < _i6; _e4++) {
        var _i7 = s[_e4],
            _o3 = n(_i7),
            _r2 = t.find(_o3).filter(function (t) {
          return t === _this8._element;
        });

        null !== _o3 && _r2.length && (_this8._selector = _o3, _this8._triggerArray.push(_i7));
      }

      _this8._parent = _this8._config.parent ? _this8._getParent() : null, _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._element, _this8._triggerArray), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(et, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;
        var e, i;
        this._parent && (e = t.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this9._config.parent ? t.getAttribute("data-bs-parent") === _this9._config.parent : t.classList.contains("collapse");
        }), 0 === e.length && (e = null));
        var n = t.findOne(this._selector);

        if (e) {
          var _t6 = e.find(function (t) {
            return n !== t;
          });

          if (i = _t6 ? et.getInstance(_t6) : null, i && i._isTransitioning) return;
        }

        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e && e.forEach(function (t) {
          n !== t && et.collapseInterface(t, "hide"), i || R.set(t, "bs.collapse", null);
        });

        var s = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var o = "scroll" + (s[0].toUpperCase() + s.slice(1));
        this._queueCallback(function () {
          _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[s] = "", _this9.setTransitioning(!1), P.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[s] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t7 = 0; _t7 < e; _t7++) {
          var _e5 = this._triggerArray[_t7],
              _i8 = s(_e5);

          _i8 && !_i8.classList.contains("show") && (_e5.classList.add("collapsed"), _e5.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(function () {
          _this10.setTransitioning(!1), _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), P.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread({}, J, {}, t)).toggle = Boolean(t.toggle), l("collapse", t, tt), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this11 = this;

        var e = this._config.parent;
        e = a(e);
        var i = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(e, "\"]");
        return t.find(i, e).forEach(function (t) {
          var e = s(t);

          _this11._addAriaAndCollapsedClass(e, [t]);
        }), e;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var i = t.classList.contains("show");
        e.forEach(function (t) {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
        });
      }
    }], [{
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var i = et.getInstance(t);

        var n = _objectSpread({}, J, {}, U.getDataAttributes(t), {}, "object" == _typeof(e) && e ? e : {});

        if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new et(t, n)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          et.collapseInterface(this, t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return J;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }]);

    return et;
  }(B);

  P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (e) {
    ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
    var i = U.getDataAttributes(this),
        s = n(this);
    t.find(s).forEach(function (t) {
      var e = et.getInstance(t);
      var n;
      e ? (null === e._parent && "string" == typeof i.parent && (e._config.parent = i.parent, e._parent = e._getParent()), n = "toggle") : n = i, et.collapseInterface(t, n);
    });
  }), _(et);
  var it = "top",
      nt = "bottom",
      st = "right",
      ot = "left",
      rt = [it, nt, st, ot],
      at = rt.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-end"]);
  }, []),
      lt = [].concat(rt, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-end"]);
  }, []),
      ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function ht(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function dt(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function ut(t) {
    return t instanceof dt(t).Element || t instanceof Element;
  }

  function ft(t) {
    return t instanceof dt(t).HTMLElement || t instanceof HTMLElement;
  }

  function pt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var mt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        ft(s) && ht(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          ft(n) && ht(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function gt(t) {
    return t.split("-")[0];
  }

  function _t(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function bt(t) {
    var e = _t(t),
        i = t.offsetWidth,
        n = t.offsetHeight;

    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function vt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && pt(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function yt(t) {
    return dt(t).getComputedStyle(t);
  }

  function wt(t) {
    return ["table", "td", "th"].indexOf(ht(t)) >= 0;
  }

  function Et(t) {
    return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function At(t) {
    return "html" === ht(t) ? t : t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || Et(t);
  }

  function Tt(t) {
    return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null;
  }

  function Ot(t) {
    for (var e = dt(t), i = Tt(t); i && wt(i) && "static" === yt(i).position;) {
      i = Tt(i);
    }

    return i && ("html" === ht(i) || "body" === ht(i) && "static" === yt(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && ft(t) && "fixed" === yt(t).position) return null;

      for (var i = At(t); ft(i) && ["html", "body"].indexOf(ht(i)) < 0;) {
        var n = yt(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function Ct(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var kt = Math.max,
      Lt = Math.min,
      xt = Math.round;

  function Dt(t, e, i) {
    return kt(t, Lt(e, i));
  }

  function St(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function It(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var Nt = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = gt(i.placement),
          l = Ct(a),
          c = [ot, st].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return St("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : It(t, rt));
        }(s.padding, i),
            d = bt(o),
            u = "y" === l ? it : ot,
            f = "y" === l ? nt : st,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = Ot(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            E = Dt(v, w, y),
            A = l;

        i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && vt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  },
      jt = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Mt(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets,
        h = !0 === c ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: xt(xt(e * n) / n) || 0,
        y: xt(xt(i * n) / n) || 0
      };
    }(o) : "function" == typeof c ? c(o) : o,
        d = h.x,
        u = void 0 === d ? 0 : d,
        f = h.y,
        p = void 0 === f ? 0 : f,
        m = o.hasOwnProperty("x"),
        g = o.hasOwnProperty("y"),
        _ = ot,
        b = it,
        v = window;

    if (l) {
      var y = Ot(i),
          w = "clientHeight",
          E = "clientWidth";
      y === dt(i) && "static" !== yt(y = Et(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === it && (b = nt, p -= y[w] - n.height, p *= a ? 1 : -1), s === ot && (_ = st, u -= y[E] - n.width, u *= a ? 1 : -1);
    }

    var A,
        T = Object.assign({
      position: r
    }, l && jt);
    return a ? Object.assign({}, T, ((A = {})[b] = g ? "0" : "", A[_] = m ? "0" : "", A.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", A)) : Object.assign({}, T, ((e = {})[b] = g ? p + "px" : "", e[_] = m ? u + "px" : "", e.transform = "", e));
  }

  var Pt = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: gt(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Mt(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Mt(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  },
      Ht = {
    passive: !0
  },
      Rt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = dt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, Ht);
      }), a && l.addEventListener("resize", i.update, Ht), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, Ht);
        }), a && l.removeEventListener("resize", i.update, Ht);
      };
    },
    data: {}
  },
      Bt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Wt(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Bt[t];
    });
  }

  var qt = {
    start: "end",
    end: "start"
  };

  function zt(t) {
    return t.replace(/start|end/g, function (t) {
      return qt[t];
    });
  }

  function $t(t) {
    var e = dt(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Ut(t) {
    return _t(Et(t)).left + $t(t).scrollLeft;
  }

  function Ft(t) {
    var e = yt(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Vt(t, e) {
    var i;
    void 0 === e && (e = []);

    var n = function t(e) {
      return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : ft(e) && Ft(e) ? e : t(At(e));
    }(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = dt(n),
        r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
        a = e.concat(r);

    return s ? a : a.concat(Vt(At(r)));
  }

  function Kt(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Xt(t, e) {
    return "viewport" === e ? Kt(function (t) {
      var e = dt(t),
          i = Et(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + Ut(t),
        y: a
      };
    }(t)) : ft(e) ? function (t) {
      var e = _t(t);

      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Kt(function (t) {
      var e,
          i = Et(t),
          n = $t(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + Ut(t),
          l = -n.scrollTop;
      return "rtl" === yt(s || i).direction && (a += kt(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Et(t)));
  }

  function Yt(t) {
    return t.split("-")[1];
  }

  function Qt(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? gt(s) : null,
        r = s ? Yt(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case it:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case nt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case st:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case ot:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? Ct(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case "start":
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case "end":
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function Gt(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        h = void 0 === c ? "popper" : c,
        d = i.altBoundary,
        u = void 0 !== d && d,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = St("number" != typeof p ? p : It(p, rt)),
        g = "popper" === h ? "reference" : "popper",
        _ = t.elements.reference,
        b = t.rects.popper,
        v = t.elements[u ? g : h],
        y = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = Vt(At(t)),
            i = ["absolute", "fixed"].indexOf(yt(t).position) >= 0 && ft(t) ? Ot(t) : t;
        return ut(i) ? e.filter(function (t) {
          return ut(t) && vt(t, i) && "body" !== ht(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Xt(t, i);
        return e.top = kt(n.top, e.top), e.right = Lt(n.right, e.right), e.bottom = Lt(n.bottom, e.bottom), e.left = kt(n.left, e.left), e;
      }, Xt(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
        w = _t(_),
        E = Qt({
      reference: w,
      element: b,
      strategy: "absolute",
      placement: s
    }),
        A = Kt(Object.assign({}, b, E)),
        T = "popper" === h ? A : w,
        O = {
      top: y.top - T.top + m.top,
      bottom: T.bottom - y.bottom + m.bottom,
      left: y.left - T.left + m.left,
      right: T.right - y.right + m.right
    },
        C = t.modifiersData.offset;

    if ("popper" === h && C) {
      var k = C[s];
      Object.keys(O).forEach(function (t) {
        var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
            i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }

    return O;
  }

  function Zt(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? lt : l,
        h = Yt(n),
        d = h ? a ? at : at.filter(function (t) {
      return Yt(t) === h;
    }) : rt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = Gt(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[gt(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var Jt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = gt(g), b = l || (_ !== g && p ? function (t) {
          if ("auto" === gt(t)) return [];
          var e = Wt(t);
          return [zt(t), e, zt(e)];
        }(g) : [Wt(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat("auto" === gt(i) ? Zt(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), A = !0, T = v[0], O = 0; O < v.length; O++) {
          var C = v[O],
              k = gt(C),
              L = "start" === Yt(C),
              x = [it, nt].indexOf(k) >= 0,
              D = x ? "width" : "height",
              S = Gt(e, {
            placement: C,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              I = x ? L ? st : ot : L ? nt : it;
          y[D] > w[D] && (I = Wt(I));
          var N = Wt(I),
              j = [];

          if (o && j.push(S[k] <= 0), a && j.push(S[I] <= 0, S[N] <= 0), j.every(function (t) {
            return t;
          })) {
            T = C, A = !1;
            break;
          }

          E.set(C, j);
        }

        if (A) for (var M = function M(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, P = p ? 3 : 1; P > 0 && "break" !== M(P); P--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function te(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function ee(t) {
    return [it, st, nt, ot].some(function (e) {
      return t[e] >= 0;
    });
  }

  var ie = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Gt(e, {
        elementContext: "reference"
      }),
          a = Gt(e, {
        altBoundary: !0
      }),
          l = te(r, n),
          c = te(a, s, o),
          h = ee(l),
          d = ee(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  },
      ne = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = lt.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = gt(t),
              s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [ot, st].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      se = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = Qt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      oe = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = Gt(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = gt(e.placement),
          b = Yt(e.placement),
          v = !b,
          y = Ct(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          C = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? it : ot,
              L = "y" === y ? nt : st,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              I = E[y] - g[L],
              N = f ? -T[x] / 2 : 0,
              j = "start" === b ? A[x] : T[x],
              M = "start" === b ? -T[x] : -A[x],
              P = e.elements.arrow,
              H = f && P ? bt(P) : {
            width: 0,
            height: 0
          },
              R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              B = R[k],
              W = R[L],
              q = Dt(0, A[x], H[x]),
              z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
              $ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
              U = e.elements.arrow && Ot(e.elements.arrow),
              F = U ? "y" === y ? U.clientTop || 0 : U.clientLeft || 0 : 0,
              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              K = E[y] + z - V - F,
              X = E[y] + $ - V;

          if (o) {
            var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
            E[y] = Y, C[y] = Y - D;
          }

          if (a) {
            var Q = "x" === y ? it : ot,
                G = "x" === y ? nt : st,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = Dt(f ? Lt(J, K) : J, Z, f ? kt(tt, X) : tt);
            E[w] = et, C[w] = et - Z;
          }
        }

        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"]
  };

  function re(t, e, i) {
    void 0 === i && (i = !1);

    var n,
        s,
        o = Et(e),
        r = _t(t),
        a = ft(e),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        c = {
      x: 0,
      y: 0
    };

    return (a || !a && !i) && (("body" !== ht(e) || Ft(o)) && (l = (n = e) !== dt(n) && ft(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : $t(n)), ft(e) ? ((c = _t(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Ut(o))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    };
  }

  var ae = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function le() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function ce(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? ae : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ae, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          h = {
        state: a,
        setOptions: function setOptions(i) {
          d(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
            reference: ut(t) ? Vt(t) : t.contextElement ? Vt(t.contextElement) : [],
            popper: Vt(e)
          };

          var s,
              r,
              c = function (t) {
            var e = function (t) {
              var e = new Map(),
                  i = new Set(),
                  n = [];
              return t.forEach(function (t) {
                e.set(t.name, t);
              }), t.forEach(function (t) {
                i.has(t.name) || function t(s) {
                  i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                    if (!i.has(n)) {
                      var s = e.get(n);
                      s && t(s);
                    }
                  }), n.push(s);
                }(t);
              }), n;
            }(t);

            return ct.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((s = [].concat(n, a.options.modifiers), r = s.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(r).map(function (t) {
            return r[t];
          })));

          return a.orderedModifiers = c.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: h,
                options: n
              });
              l.push(o || function () {});
            }
          }), h.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (le(e, i)) {
              a.rects = {
                reference: re(e, Ot(i), "fixed" === a.options.strategy),
                popper: bt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            h.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          d(), c = !0;
        }
      };
      if (!le(t, e)) return h;

      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }

  var he = ce(),
      de = ce({
    defaultModifiers: [Rt, se, Pt, mt]
  }),
      ue = ce({
    defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie]
  }),
      fe = Object.freeze({
    __proto__: null,
    popperGenerator: ce,
    detectOverflow: Gt,
    createPopperBase: he,
    createPopper: ue,
    createPopperLite: de,
    top: it,
    bottom: nt,
    right: st,
    left: ot,
    auto: "auto",
    basePlacements: rt,
    start: "start",
    end: "end",
    clippingParents: "clippingParents",
    viewport: "viewport",
    popper: "popper",
    reference: "reference",
    variationPlacements: at,
    placements: lt,
    beforeRead: "beforeRead",
    read: "read",
    afterRead: "afterRead",
    beforeMain: "beforeMain",
    main: "main",
    afterMain: "afterMain",
    beforeWrite: "beforeWrite",
    write: "write",
    afterWrite: "afterWrite",
    modifierPhases: ct,
    applyStyles: mt,
    arrow: Nt,
    computeStyles: Pt,
    eventListeners: Rt,
    flip: Jt,
    hide: ie,
    offset: ne,
    popperOffsets: se,
    preventOverflow: oe
  });

  var pe = new RegExp("ArrowUp|ArrowDown|Escape"),
      me = g() ? "top-end" : "top-start",
      ge = g() ? "top-start" : "top-end",
      _e = g() ? "bottom-end" : "bottom-start",
      be = g() ? "bottom-start" : "bottom-end",
      ve = g() ? "left-start" : "right-start",
      ye = g() ? "right-start" : "left-start",
      we = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      Ee = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var Ae =
  /*#__PURE__*/
  function (_B5) {
    _inherits(Ae, _B5);

    function Ae(t, e) {
      var _this12;

      _classCallCheck(this, Ae);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Ae).call(this, t)), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar(), _this12._addEventListeners();
      return _this12;
    }

    _createClass(Ae, [{
      key: "toggle",
      value: function toggle() {
        h(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
      }
    }, {
      key: "show",
      value: function show() {
        if (h(this._element) || this._menu.classList.contains("show")) return;
        var t = Ae.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref8;

          if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e6 = this._element;
            "parent" === this._config.reference ? _e6 = t : r(this._config.reference) ? _e6 = a(this._config.reference) : "object" == _typeof(this._config.reference) && (_e6 = this._config.reference);

            var _i9 = this._getPopperConfig(),
                _n5 = _i9.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = ue(_e6, this._menu, _i9), _n5 && U.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
            return P.on(t, "mouseover", u);
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), P.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (h(this._element) || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(Ae.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this13 = this;

        P.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this13.toggle();
        });
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref9;

        P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.off(t, "mouseover", u);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread({}, this.constructor.Default, {}, U.getDataAttributes(this._element), {}, t), l("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return t.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return ve;
        if (t.classList.contains("dropstart")) return ye;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ge : me : e ? be : _e;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this14 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this14._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread({}, t, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref10) {
        var e = _ref10.key,
            i = _ref10.target;
        var n = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
        n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus();
      }
    }], [{
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var i = Ae.getOrCreateInstance(t, e);

        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Ae.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(e) {
        if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
        var i = t.find('[data-bs-toggle="dropdown"]');

        for (var _t8 = 0, _n6 = i.length; _t8 < _n6; _t8++) {
          var _n7 = Ae.getInstance(i[_t8]);

          if (!_n7 || !1 === _n7._config.autoClose) continue;
          if (!_n7._element.classList.contains("show")) continue;
          var _s3 = {
            relatedTarget: _n7._element
          };

          if (e) {
            var _t9 = e.composedPath(),
                _i10 = _t9.includes(_n7._menu);

            if (_t9.includes(_n7._element) || "inside" === _n7._config.autoClose && !_i10 || "outside" === _n7._config.autoClose && _i10) continue;
            if (_n7._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
            "click" === e.type && (_s3.clickEvent = e);
          }

          _n7._completeHide(_s3);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return s(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(e) {
        var _this15 = this;

        if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !pe.test(e.key)) return;
        var i = this.classList.contains("show");
        if (!i && "Escape" === e.key) return;
        if (e.preventDefault(), e.stopPropagation(), h(this)) return;

        var n = function n() {
          return _this15.matches('[data-bs-toggle="dropdown"]') ? _this15 : t.prev(_this15, '[data-bs-toggle="dropdown"]')[0];
        };

        return "Escape" === e.key ? (n().focus(), void Ae.clearMenus()) : "ArrowUp" === e.key || "ArrowDown" === e.key ? (i || n().click(), void Ae.getInstance(n())._selectMenuItem(e)) : void (i && "Space" !== e.key || Ae.clearMenus());
      }
    }, {
      key: "Default",
      get: function get() {
        return we;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ee;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }]);

    return Ae;
  }(B);

  P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Ae.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Ae.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), Ae.dropdownInterface(this);
  }), _(Ae);

  var Te =
  /*#__PURE__*/
  function () {
    function Te() {
      _classCallCheck(this, Te);

      this._element = document.body;
    }

    _createClass(Te, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".sticky-top", "marginRight", function (e) {
          return e - t;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this16 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this16._element && window.innerWidth > t.clientWidth + n) return;

          _this16._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t)[e];
          t.style[e] = i(Number.parseFloat(s)) + "px";
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style[e];
        i && U.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = U.getDataAttribute(t, e);
          void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(e, i) {
        r(e) ? i(e) : t.find(e, this._element).forEach(i);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return Te;
  }();

  var Oe = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
      Ce = {
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  };

  var ke =
  /*#__PURE__*/
  function () {
    function ke(t) {
      _classCallCheck(this, ke);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(ke, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          b(t);
        })) : b(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this17 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this17.dispose(), b(t);
        })) : b(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t10 = document.createElement("div");

          _t10.className = "modal-backdrop", this._config.isAnimated && _t10.classList.add("fade"), this._element = _t10;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread({}, Oe, {}, "object" == _typeof(t) ? t : {})).rootElement = a(t.rootElement), l("backdrop", t, Ce), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this18 = this;

        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", function () {
          b(_this18._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        v(t, this._getElement(), this._config.isAnimated);
      }
    }]);

    return ke;
  }();

  var Le = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      xe = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var De =
  /*#__PURE__*/
  function (_B6) {
    _inherits(De, _B6);

    function De(e, i) {
      var _this19;

      _classCallCheck(this, De);

      _this19 = _possibleConstructorReturn(this, _getPrototypeOf(De).call(this, e)), _this19._config = _this19._getConfig(i), _this19._dialog = t.findOne(".modal-dialog", _this19._element), _this19._backdrop = _this19._initializeBackDrop(), _this19._isShown = !1, _this19._ignoreBackdropClick = !1, _this19._isTransitioning = !1, _this19._scrollBar = new Te();
      return _this19;
    }

    _createClass(De, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this20 = this;

        this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this20.hide(t);
        }), P.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          P.one(_this20._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this20._element && (_this20._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this20._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this21 = this;

        if (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), P.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this21._hideModal();
        }, this._element, e);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return P.off(t, ".bs.modal");
        }), this._backdrop.dispose(), _get(_getPrototypeOf(De.prototype), "dispose", this).call(this), P.off(document, "focusin.bs.modal");
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new ke({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, Le, {}, U.getDataAttributes(this._element), {}, "object" == _typeof(t) ? t : {}), l("modal", t, xe), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(e) {
        var _this22 = this;

        var i = this._isAnimated(),
            n = t.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && f(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(function () {
          _this22._config.focus && _this22._element.focus(), _this22._isTransitioning = !1, P.trigger(_this22._element, "shown.bs.modal", {
            relatedTarget: e
          });
        }, this._dialog, i);
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this23 = this;

        P.off(document, "focusin.bs.modal"), P.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this23._element === t.target || _this23._element.contains(t.target) || _this23._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this24 = this;

        this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this24._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this24.hide()) : _this24._config.keyboard || "Escape" !== t.key || _this24._triggerBackdropTransition();
        }) : P.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this25 = this;

        this._isShown ? P.on(window, "resize.bs.modal", function () {
          return _this25._adjustDialog();
        }) : P.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this26 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this26._resetAdjustments(), _this26._scrollBar.reset(), P.trigger(_this26._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this27 = this;

        P.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this27._ignoreBackdropClick ? _this27._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this27._config.backdrop ? _this27.hide() : "static" === _this27._config.backdrop && _this27._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this28 = this;

        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var _this$_element = this._element,
            t = _this$_element.classList,
            e = _this$_element.scrollHeight,
            i = _this$_element.style,
            n = e > document.documentElement.clientHeight;
        !n && "hidden" === i.overflowY || t.contains("modal-static") || (n || (i.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(function () {
          t.remove("modal-static"), n || _this28._queueCallback(function () {
            i.overflowY = "";
          }, _this28._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        (!i && t && !g() || i && !t && g()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !g() || !i && t && g()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = De.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Le;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }]);

    return De;
  }(B);

  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this29 = this;

    var e = s(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || P.one(e, "hidden.bs.modal", function () {
        c(_this29) && _this29.focus();
      });
    }), De.getOrCreateInstance(e).toggle(this);
  }), _(De);
  var Se = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Ie = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Ne =
  /*#__PURE__*/
  function (_B7) {
    _inherits(Ne, _B7);

    function Ne(t, e) {
      var _this30;

      _classCallCheck(this, Ne);

      _this30 = _possibleConstructorReturn(this, _getPrototypeOf(Ne).call(this, t)), _this30._config = _this30._getConfig(e), _this30._isShown = !1, _this30._backdrop = _this30._initializeBackDrop(), _this30._addEventListeners();
      return _this30;
    }

    _createClass(Ne, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this31 = this;

        this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new Te().hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          P.trigger(_this31._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this32 = this;

        this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (P.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this32._element.setAttribute("aria-hidden", !0), _this32._element.removeAttribute("aria-modal"), _this32._element.removeAttribute("role"), _this32._element.style.visibility = "hidden", _this32._config.scroll || new Te().reset(), P.trigger(_this32._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), _get(_getPrototypeOf(Ne.prototype), "dispose", this).call(this), P.off(document, "focusin.bs.offcanvas");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, Se, {}, U.getDataAttributes(this._element), {}, "object" == _typeof(t) ? t : {}), l("offcanvas", t, Ie), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this33 = this;

        return new ke({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this33.hide();
          }
        });
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        P.off(document, "focusin.bs.offcanvas"), P.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this34 = this;

        P.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this34.hide();
        }), P.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this34._config.keyboard && "Escape" === t.key && _this34.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ne.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return Se;
      }
    }]);

    return Ne;
  }(B);

  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
    var _this35 = this;

    var i = s(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this)) return;
    P.one(i, "hidden.bs.offcanvas", function () {
      c(_this35) && _this35.focus();
    });
    var n = t.findOne(".offcanvas.show");
    n && n !== i && Ne.getInstance(n).hide(), Ne.getOrCreateInstance(i).toggle(this);
  }), P.on(window, "load.bs.offcanvas.data-api", function () {
    return t.find(".offcanvas.show").forEach(function (t) {
      return Ne.getOrCreateInstance(t).show();
    });
  }), _(Ne);

  var je = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Pe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      He = function He(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !je.has(i) || Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t11 = 0, _e7 = n.length; _t11 < _e7; _t11++) {
      if (n[_t11].test(i)) return !0;
    }

    return !1;
  };

  function Re(t, e, i) {
    var _ref11;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = (_ref11 = []).concat.apply(_ref11, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t12, _i11) {
      var _ref12;

      var i = o[_t12],
          n = i.nodeName.toLowerCase();

      if (!s.includes(n)) {
        i.remove();
        return "continue";
      }

      var r = (_ref12 = []).concat.apply(_ref12, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[n] || []);

      r.forEach(function (t) {
        He(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t12 = 0, _i11 = o.length; _t12 < _i11; _t12++) {
      var _ret = _loop(_t12, _i11);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      We = new Set(["sanitize", "allowList", "sanitizeFn"]),
      qe = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      ze = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: g() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: g() ? "right" : "left"
  },
      $e = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      Ue = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };

  var Fe =
  /*#__PURE__*/
  function (_B8) {
    _inherits(Fe, _B8);

    function Fe(t, e) {
      var _this36;

      _classCallCheck(this, Fe);

      if (void 0 === fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this36 = _possibleConstructorReturn(this, _getPrototypeOf(Fe).call(this, t)), _this36._isEnabled = !0, _this36._timeout = 0, _this36._hoverState = "", _this36._activeTrigger = {}, _this36._popper = null, _this36._config = _this36._getConfig(e), _this36.tip = null, _this36._setListeners();
      return _this36;
    }

    _createClass(Fe, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e8 = this._initializeOnDelegatedTarget(t);

          _e8._activeTrigger.click = !_e8._activeTrigger.click, _e8._isWithActiveTrigger() ? _e8._enter(null, _e8) : _e8._leave(null, _e8);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), _get(_getPrototypeOf(Fe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _s$classList,
            _ref13,
            _this37 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = P.trigger(this._element, this.constructor.Event.SHOW),
            i = d(this._element),
            n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
        if (t.defaultPrevented || !n) return;
        var s = this.getTipElement(),
            o = e(this.constructor.NAME);
        s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");

        var r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
            a = this._getAttachment(r);

        this._addAttachmentClass(a);

        var l = this._config.container;
        R.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ue(this._element, s, this._getPopperConfig(a)), s.classList.add("show");
        var c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
        c && (_s$classList = s.classList).add.apply(_s$classList, _toConsumableArray(c.split(" "))), "ontouchstart" in document.documentElement && (_ref13 = []).concat.apply(_ref13, _toConsumableArray(document.body.children)).forEach(function (t) {
          P.on(t, "mouseover", u);
        });
        var h = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this37._hoverState;
          _this37._hoverState = null, P.trigger(_this37._element, _this37.constructor.Event.SHOWN), "out" === t && _this37._leave(null, _this37);
        }, this.tip, h);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref14,
            _this38 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref14 = []).concat.apply(_ref14, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.off(t, "mouseover", u);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this38._isWithActiveTrigger() || ("show" !== _this38._hoverState && t.remove(), _this38._cleanTipClass(), _this38._element.removeAttribute("aria-describedby"), P.trigger(_this38._element, _this38.constructor.Event.HIDDEN), _this38._popper && (_this38._popper.destroy(), _this38._popper = null));
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var e = this.getTipElement();
        this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return r(e) ? (e = a(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Re(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");

        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var i = this.constructor.DATA_KEY;
        return (e = e || R.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), R.set(t.delegateTarget, i, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this39 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this39._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this40 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this40._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this40._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread({}, e, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return ze[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this41 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) P.on(_this41._element, _this41.constructor.Event.CLICK, _this41._config.selector, function (t) {
            return _this41.toggle(t);
          });else if ("manual" !== t) {
            var _e9 = "hover" === t ? _this41.constructor.Event.MOUSEENTER : _this41.constructor.Event.FOCUSIN,
                _i12 = "hover" === t ? _this41.constructor.Event.MOUSELEAVE : _this41.constructor.Event.FOCUSOUT;

            P.on(_this41._element, _e9, _this41._config.selector, function (t) {
              return _this41._enter(t);
            }), P.on(_this41._element, _i12, _this41._config.selector, function (t) {
              return _this41._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this41._element && _this41.hide();
        }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread({}, this._config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t13 in this._activeTrigger) {
          if (this._activeTrigger[_t13]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = U.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          We.has(t) && delete e[t];
        }), (t = _objectSpread({}, this.constructor.Default, {}, e, {}, "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Re(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this._config) for (var _e10 in this._config) {
          this.constructor.Default[_e10] !== this._config[_e10] && (t[_e10] = this._config[_e10]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Be);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Fe.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return $e;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ue;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return qe;
      }
    }]);

    return Fe;
  }(B);

  _(Fe);

  var Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Ke = _objectSpread({}, Fe.Default, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Xe = _objectSpread({}, Fe.DefaultType, {
    content: "(string|element|function)"
  }),
      Ye = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var Qe =
  /*#__PURE__*/
  function (_Fe) {
    _inherits(Qe, _Fe);

    function Qe() {
      _classCallCheck(this, Qe);

      return _possibleConstructorReturn(this, _getPrototypeOf(Qe).apply(this, arguments));
    }

    _createClass(Qe, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        return this.tip || (this.tip = _get(_getPrototypeOf(Qe.prototype), "getTipElement", this).call(this), this.getTitle() || t.findOne(".popover-header", this.tip).remove(), this._getContent() || t.findOne(".popover-body", this.tip).remove()), this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var e = this.getTipElement();
        this.setElementContent(t.findOne(".popover-header", e), this.getTitle());

        var i = this._getContent();

        "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this._config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Ve);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Qe.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ke;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ye;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Xe;
      }
    }]);

    return Qe;
  }(Fe);

  _(Qe);

  var Ge = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Ze = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var Je =
  /*#__PURE__*/
  function (_B9) {
    _inherits(Je, _B9);

    function Je(t, e) {
      var _this42;

      _classCallCheck(this, Je);

      _this42 = _possibleConstructorReturn(this, _getPrototypeOf(Je).call(this, t)), _this42._scrollElement = "BODY" === _this42._element.tagName ? window : _this42._element, _this42._config = _this42._getConfig(e), _this42._selector = "".concat(_this42._config.target, " .nav-link, ").concat(_this42._config.target, " .list-group-item, ").concat(_this42._config.target, " .dropdown-item"), _this42._offsets = [], _this42._targets = [], _this42._activeTarget = null, _this42._scrollHeight = 0, P.on(_this42._scrollElement, "scroll.bs.scrollspy", function () {
        return _this42._process();
      }), _this42.refresh(), _this42._process();
      return _this42;
    }

    _createClass(Je, [{
      key: "refresh",
      value: function refresh() {
        var _this43 = this;

        var e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            i = "auto" === this._config.method ? e : this._config.method,
            s = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(function (e) {
          var o = n(e),
              r = o ? t.findOne(o) : null;

          if (r) {
            var _t14 = r.getBoundingClientRect();

            if (_t14.width || _t14.height) return [U[i](r).top + s, o];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this43._offsets.push(t[0]), _this43._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        P.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(Je.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("string" != typeof (t = _objectSpread({}, Ge, {}, U.getDataAttributes(this._element), {}, "object" == _typeof(t) && t ? t : {})).target && r(t.target)) {
          var _i13 = t.target.id;
          _i13 || (_i13 = e("scrollspy"), t.target.id = _i13), t.target = "#" + _i13;
        }

        return l("scrollspy", t, Ze), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t15 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t15 && this._activate(_t15);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e11 = this._offsets.length; _e11--;) {
            this._activeTarget !== this._targets[_e11] && t >= this._offsets[_e11] && (void 0 === this._offsets[_e11 + 1] || t < this._offsets[_e11 + 1]) && this._activate(this._targets[_e11]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(e) {
        this._activeTarget = e, this._clear();

        var i = this._selector.split(",").map(function (t) {
          return "".concat(t, "[data-bs-target=\"").concat(e, "\"],").concat(t, "[href=\"").concat(e, "\"]");
        }),
            n = t.findOne(i.join(","));

        n.classList.contains("dropdown-item") ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), t.parents(n, ".nav, .list-group").forEach(function (e) {
          t.prev(e, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), t.prev(e, ".nav-item").forEach(function (e) {
            t.children(e, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        t.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Je.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ge;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }]);

    return Je;
  }(B);

  P.on(window, "load.bs.scrollspy.data-api", function () {
    t.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Je(t);
    });
  }), _(Je);

  var ti =
  /*#__PURE__*/
  function (_B10) {
    _inherits(ti, _B10);

    function ti() {
      _classCallCheck(this, ti);

      return _possibleConstructorReturn(this, _getPrototypeOf(ti).apply(this, arguments));
    }

    _createClass(ti, [{
      key: "show",
      value: function show() {
        var _this44 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var e;

        var i = s(this._element),
            n = this._element.closest(".nav, .list-group");

        if (n) {
          var _i14 = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";

          e = t.find(_i14, n), e = e[e.length - 1];
        }

        var o = e ? P.trigger(e, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (P.trigger(this._element, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== o && o.defaultPrevented) return;

        this._activate(this._element, n);

        var r = function r() {
          P.trigger(e, "hidden.bs.tab", {
            relatedTarget: _this44._element
          }), P.trigger(_this44._element, "shown.bs.tab", {
            relatedTarget: e
          });
        };

        i ? this._activate(i, i.parentNode, r) : r();
      }
    }, {
      key: "_activate",
      value: function _activate(e, i, n) {
        var _this45 = this;

        var s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
            o = n && s && s.classList.contains("fade"),
            r = function r() {
          return _this45._transitionComplete(e, s, n);
        };

        s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(e, i, n) {
        if (i) {
          i.classList.remove("active");

          var _e12 = t.findOne(":scope > .dropdown-menu .active", i.parentNode);

          _e12 && _e12.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1);
        }

        e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f(e), e.classList.contains("fade") && e.classList.add("show");
        var s = e.parentNode;

        if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
          var _i15 = e.closest(".dropdown");

          _i15 && t.find(".dropdown-toggle", _i15).forEach(function (t) {
            return t.classList.add("active");
          }), e.setAttribute("aria-expanded", !0);
        }

        n && n();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ti.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }]);

    return ti;
  }(B);

  P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), h(this) || ti.getOrCreateInstance(this).show();
  }), _(ti);
  var ei = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ii = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ni =
  /*#__PURE__*/
  function (_B11) {
    _inherits(ni, _B11);

    function ni(t, e) {
      var _this46;

      _classCallCheck(this, ni);

      _this46 = _possibleConstructorReturn(this, _getPrototypeOf(ni).call(this, t)), _this46._config = _this46._getConfig(e), _this46._timeout = null, _this46._hasMouseInteraction = !1, _this46._hasKeyboardInteraction = !1, _this46._setListeners();
      return _this46;
    }

    _createClass(ni, [{
      key: "show",
      value: function show() {
        var _this47 = this;

        P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), f(this._element), this._element.classList.add("showing"), this._queueCallback(function () {
          _this47._element.classList.remove("showing"), _this47._element.classList.add("show"), P.trigger(_this47._element, "shown.bs.toast"), _this47._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this48 = this;

        this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(function () {
          _this48._element.classList.add("hide"), P.trigger(_this48._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(ni.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, ii, {}, U.getDataAttributes(this._element), {}, "object" == _typeof(t) && t ? t : {}), l("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this49 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this49.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this50 = this;

        P.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this50.hide();
        }), P.on(this._element, "mouseover.bs.toast", function (t) {
          return _this50._onInteraction(t, !0);
        }), P.on(this._element, "mouseout.bs.toast", function (t) {
          return _this50._onInteraction(t, !1);
        }), P.on(this._element, "focusin.bs.toast", function (t) {
          return _this50._onInteraction(t, !0);
        }), P.on(this._element, "focusout.bs.toast", function (t) {
          return _this50._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ni.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ei;
      }
    }, {
      key: "Default",
      get: function get() {
        return ii;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }]);

    return ni;
  }(B);

  return _(ni), {
    Alert: W,
    Button: q,
    Carousel: Z,
    Collapse: et,
    Dropdown: Ae,
    Modal: De,
    Offcanvas: Ne,
    Popover: Qe,
    ScrollSpy: Je,
    Tab: ti,
    Toast: ni,
    Tooltip: Fe
  };
});
/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */

!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : void 0, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "1.12.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return e.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    },
    pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a) {
      return n.each(this, a);
    },
    map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }

    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray || function (a) {
      return "array" === n.type(a);
    },
    isWindow: function isWindow(a) {
      return null != a && a == a.window;
    },
    isNumeric: function isNumeric(a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    isPlainObject: function isPlainObject(a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;

      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }

      if (!l.ownFirst) for (b in a) {
        return k.call(a, b);
      }

      for (b in a) {
        ;
      }

      return void 0 === b || k.call(a, b);
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? i[j.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b) {
      var c,
          d = 0;

      if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      var d;

      if (b) {
        if (h) return h.call(b, a, c);

        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }

      return -1;
    },
    merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;

      while (c > d) {
        a[e++] = b[d++];
      }

      if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }
      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];
      if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }
      return f.apply([], h);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, d, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function d() {
        return a.apply(b || this, c.concat(e.call(arguments)));
      }, d.guid = a.guid = a.guid || n.guid++, d) : void 0;
    },
    now: function now() {
      return +new Date();
    },
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }

  var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M + "|[*])"),
      ATTR: new RegExp("^" + N),
      PSEUDO: new RegExp("^" + O),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };

    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;

      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }

        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";

            while (h--) {
              r[h] = l + " " + qa(r[h]);
            }

            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(Q, "$1"), b, d, e);
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ha(a) {
      return a[u] = !0, a;
    }

    function ia(a) {
      var b = n.createElement("div");

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
          e = c.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }

    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;

        while (c = c.parentNode) {
          g.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        while (g[d] === h[d]) {
          d++;
        }

        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;

            if (q) {
              if (f) {
                while (p) {
                  m = b;

                  while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];

                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }

              return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Y.test(a.nodeName);
        },
        input: function input(a) {
          return X.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: na(function () {
          return [0];
        }),
        last: na(function (a, b) {
          return [b - 1];
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }

          return a;
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = la(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = ma(b);
    }

    function pa() {}

    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }

      return d;
    }

    function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];

        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
            if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }

    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }

      return c;
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }

      return g;
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }

            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }

          m.push(c);
        }
      }

      return sa(m);
    }

    function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;

        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);

            while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = y);
          }

          c && ((l = !q && l) && r--, _f && t.push(l));
        }

        if (r += s, c && s !== r) {
          o = 0;

          while (q = b[o++]) {
            q(t, u, g, h);
          }

          if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }
            u = ua(u);
          }

          H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }

        return k && (w = y, j = v), t;
      };

      return c ? ha(f) : f;
    }

    return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, xa(e, d)), f.selector = a;
      }

      return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = W.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);

  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;

  var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;

    while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;
        d.push(a);
      }
    }

    return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }

    return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (n.contains(d[b], this)) return !0;
        }
      }));

      for (b = 0; e > b; b++) {
        n.find(a, d[b], c);
      }

      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    },
    filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    },
    is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    }
  });

  var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;
    if (!a) return this;

    if (c = c || A, "string" == typeof a) {
      if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);

      if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }
        return this;
      }

      if (f = d.getElementById(e[2]), f && f.parentNode) {
        if (f.id !== e[2]) return A.find(a);
        this.length = 1, this[0] = f;
      }

      return this.context = d, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };

  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
      E = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.fn.extend({
    has: function has(a) {
      var b,
          c = n(a, this),
          d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (n.contains(this, c[b])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function F(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);

    return a;
  }

  n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return u(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    },
    next: function next(a) {
      return F(a, "nextSibling");
    },
    prev: function prev(a) {
      return F(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return v(a.firstChild);
    },
    contents: function contents(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();

        while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }

      a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = {
      add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      },
      remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      },
      has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      },
      empty: function empty() {
        return f && (f = []), this;
      },
      disable: function disable() {
        return e = g = [], f = c = "", this;
      },
      disabled: function disabled() {
        return !f;
      },
      lock: function lock() {
        return e = !0, c || j.disable(), this;
      },
      locked: function locked() {
        return !!e;
      },
      fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      },
      fire: function fire() {
        return j.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!d;
      }
    };

    return j;
  }, n.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var I;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    }
  });

  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }

  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
  }

  n.ready.promise = function (b) {
    if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;

      try {
        c = null == a.frameElement && d.documentElement;
      } catch (e) {}

      c && c.doScroll && !function f() {
        if (!n.isReady) {
          try {
            c.doScroll("left");
          } catch (b) {
            return a.setTimeout(f, 50);
          }

          J(), n.ready();
        }
      }();
    }
    return I.promise(b);
  }, n.ready.promise();
  var L;

  for (L in n(l)) {
    break;
  }

  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
    var a, b, c, e;
    c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
  }), function () {
    var a = d.createElement("div");
    l.deleteExpando = !0;

    try {
      delete a.test;
    } catch (b) {
      l.deleteExpando = !1;
    }

    a = null;
  }();

  var M = function M(a) {
    var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  },
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();

      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}

        n.data(a, b, c);
      } else c = void 0;
    }

    return c;
  }

  function Q(a) {
    var b;

    for (b in a) {
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }

    return !0;
  }

  function R(a, b, d, e) {
    if (M(a)) {
      var f,
          g,
          h = n.expando,
          i = a.nodeType,
          j = i ? n.cache : a,
          k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), "object" != _typeof(b) && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f;
    }
  }

  function S(a, b, c) {
    if (M(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? n.cache : a,
          h = f ? a[n.expando] : n.expando;

      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;

          while (e--) {
            delete d[b[e]];
          }

          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }

        (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
      }
    }
  }

  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(a) {
      return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a);
    },
    data: function data(a, b, c) {
      return R(a, b, c);
    },
    removeData: function removeData(a, b) {
      return S(a, b);
    },
    _data: function _data(a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function _removeData(a, b) {
      return S(a, b, !0);
    }
  }), n.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          }

          n._data(f, "parsedAttrs", !0);
        }

        return e;
      }

      return "object" == _typeof(a) ? this.each(function () {
        n.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        n.data(this, a, b);
      }) : f ? P(f, a, n.data(f, a)) : void 0;
    },
    removeData: function removeData(a) {
      return this.each(function () {
        n.removeData(this, a);
      });
    }
  }), n.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return n._data(a, c) || n._data(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          n._removeData(a, b + "queue"), n._removeData(a, c);
        })
      });
    }
  }), n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  }), function () {
    var a;

    l.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, e;
      return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
    };
  }();

  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
      V = ["Top", "Right", "Bottom", "Left"],
      W = function W(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };

  function X(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));

    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;

      do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }

    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }

  var Y = function Y(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === n.type(c)) {
      e = !0;

      for (h in c) {
        Y(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      Z = /^(?:checkbox|radio)$/i,
      $ = /<([\w:-]+)/,
      _ = /^$|\/(?:java|ecma)script/i,
      aa = /^\s+/,
      ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function ca(a) {
    var b = ba.split("|"),
        c = a.createDocumentFragment();
    if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }
    return c;
  }

  !function () {
    var a = d.createElement("div"),
        b = d.createDocumentFragment(),
        c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando);
  }();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

  function ea(a, b) {
    var c,
        d,
        e = 0,
        f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
    if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    }
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
  }

  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
  }

  var ga = /<|&#?\w+;/,
      ha = /<tbody/i;

  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }

  function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
      if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);else if (ga.test(g)) {
        i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];

        while (f--) {
          i = i.lastChild;
        }

        if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
          g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;

          while (f--) {
            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
          }
        }

        n.merge(q, i.childNodes), i.textContent = "";

        while (i.firstChild) {
          i.removeChild(i.firstChild);
        }

        i = p.lastChild;
      } else q.push(b.createTextNode(g));
    }

    i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;

    while (g = q[r++]) {
      if (d && n.inArray(g, d) > -1) e && e.push(g);else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
        f = 0;

        while (g = i[f++]) {
          _.test(g.type || "") && c.push(g);
        }
      }
    }

    return i = null, p;
  }

  !function () {
    var b,
        c,
        e = d.createElement("div");

    for (b in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    }

    e = null;
  }();
  var ka = /^(?:input|select|textarea)$/i,
      la = /^key/,
      ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      na = /^(?:focusinfocus|focusoutblur)$/,
      oa = /^([^.]*)(?:\.(.+)|)/;

  function pa() {
    return !0;
  }

  function qa() {
    return !1;
  }

  function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }

  function sa(a, b, c, d, e, f) {
    var g, h;

    if ("object" == _typeof(b)) {
      "string" != typeof c && (d = d || c, c = void 0);

      for (h in b) {
        sa(a, h, c, d, b[h], f);
      }

      return a;
    }

    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;else if (!e) return a;
    return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }

  n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n._data(a);

      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;

        while (h--) {
          f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        }

        a = null;
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n.hasData(a) && n._data(a);

      if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;

        while (j--) {
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;

            while (f--) {
              g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            }

            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }

        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];

      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == _typeof(b) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
            p.push(i), m = i;
          }

          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
        }

        o = 0;

        while ((i = p[o++]) && !b.isPropagationStopped()) {
          b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        }

        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;

          try {
            e[q]();
          } catch (s) {}

          n.event.triggered = void 0, m && (e[h] = m);
        }

        return b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = n.event.fix(a);
      var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (n._data(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }

          d.length && g.push({
            elem: i,
            handlers: d
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    fix: function fix(a) {
      if (a[n.expando]) return a;
      var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;

      while (b--) {
        c = e[b], a[c] = g[c];
      }

      return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button,
            h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: qa,
    isPropagationStopped: qa,
    isImmediatePropagationStopped: qa,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), l.submit || (n.event.special.submit = {
    setup: function setup() {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0;
        }), n._data(c, "submit", !0));
      });
    },
    postDispatch: function postDispatch(a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
    },
    teardown: function teardown() {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit");
    }
  }), l.change || (n.event.special.change = {
    setup: function setup() {
      return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0);
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a);
      })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
        }), n._data(b, "change", !0));
      });
    },
    handle: function handle(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    },
    teardown: function teardown() {
      return n.event.remove(this, "._change"), !ka.test(this.nodeName);
    }
  }), l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };

    n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = n._data(d, b);

        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b));
      }
    };
  }), n.fn.extend({
    on: function on(a, b, c, d) {
      return sa(this, a, b, c, d);
    },
    one: function one(a, b, c, d) {
      return sa(this, a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
      ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
      va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      wa = /<script|<style|<link/i,
      xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ya = /^true\/(.*)/,
      za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Aa = ca(d),
      Ba = Aa.appendChild(d.createElement("div"));

  function Ca(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function Da(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a;
  }

  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
          d,
          e,
          f = n._data(a),
          g = n._data(b, f),
          h = f.events;

      if (h) {
        delete g.handle, g.events = {};

        for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            n.event.add(b, c, h[c][d]);
          }
        }
      }

      g.data && (g.data = n.extend({}, g.data));
    }
  }

  function Ga(a, b) {
    var c, d, e;

    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);

        for (d in e.events) {
          n.removeEvent(b, d, e.handle);
        }

        b.removeAttribute(n.expando);
      }

      "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
  }

  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
    });

    if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
        g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      }

      if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
        g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      }
      k = e = null;
    }

    return a;
  }

  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    }

    return a;
  }

  n.extend({
    htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Ga(e, d[g]);
      }
      if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
        Fa(e, d[g]);
      } else Fa(a, f);
      return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f;
    },
    cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          }
          j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
        }
      }
    }
  }), n.fn.extend({
    domManip: Ha,
    detach: function detach(a) {
      return Ia(this, a, !0);
    },
    remove: function remove(a) {
      return Ia(this, a);
    },
    text: function text(a) {
      return Y(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function append() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(ea(a, !1));

        while (a.firstChild) {
          a.removeChild(a.firstChild);
        }

        a.options && n.nodeName(a, "select") && (a.options.length = 0);
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return Y(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;

        if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);

          try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = [];
      return Ha(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      }

      return this.pushStack(e);
    };
  });
  var Ja,
      Ka = {
    HTML: "block",
    BODY: "block"
  };

  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");
    return c.detach(), d;
  }

  function Ma(a) {
    var b = d,
        c = Ka[a];
    return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c;
  }

  var Na = /^margin/,
      Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
      Pa = function Pa(a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  },
      Qa = d.documentElement;

  !function () {
    var b,
        c,
        e,
        f,
        g,
        h,
        i = d.createElement("div"),
        j = d.createElement("div");

    if (j.style) {
      var _k = function _k() {
        var k,
            l,
            m = d.documentElement;
        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
          width: "4px"
        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
          marginRight: "4px"
        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
      };

      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
        reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == b && _k(), f;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == b && _k(), e;
        },
        pixelMarginRight: function pixelMarginRight() {
          return null == b && _k(), c;
        },
        pixelPosition: function pixelPosition() {
          return null == b && _k(), b;
        },
        reliableMarginRight: function reliableMarginRight() {
          return null == b && _k(), g;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return null == b && _k(), h;
        }
      });
    }
  }();
  var Ra,
      Sa,
      Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function Ra(b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b);
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "";
  }) : Qa.currentStyle && (Ra = function Ra(a) {
    return a.currentStyle;
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });

  function Ua(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  var Va = /alpha\([^)]*\)/i,
      Wa = /opacity\s*=\s*([^)]*)/i,
      Xa = /^(none|table(?!-c[ea]).+)/,
      Ya = new RegExp("^(" + T + ")(.*)$", "i"),
      Za = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      $a = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      _a = ["Webkit", "O", "Moz", "ms"],
      ab = d.createElement("div").style;

  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
        c = _a.length;

    while (c--) {
      if (a = _a[c] + b, a in ab) return a;
    }
  }

  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    }

    for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }

    return a;
  }

  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    }

    return g;
  }

  function fb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a),
        g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);

    if (0 >= e || null == e) {
      if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }

    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = _typeof(c), "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function get(a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
          return fb(a, b, d);
        }) : fb(a, b, d) : void 0;
      },
      set: function set(a, c, d) {
        var e = d && Ra(a);
        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      }
    };
  }), l.opacity || (n.cssHooks.opacity = {
    get: function get(a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    },
    set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
    }
  }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
    return b ? Pa(a, {
      display: "inline-block"
    }, Sa, [a, "marginRight"]) : void 0;
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left;
    }) : 0)) + "px" : void 0;
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, Na.test(a) || (n.cssHooks[a + b].set = db);
  }), n.fn.extend({
    css: function css(a, b) {
      return Y(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return cb(this, !0);
    },
    hide: function hide() {
      return cb(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        W(this) ? n(this).show() : n(this).hide();
      });
    }
  });

  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }

  n.Tween = gb, gb.prototype = {
    constructor: gb,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = gb.propHooks[this.prop];
      return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = gb.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this;
    }
  }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      },
      set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing"
  }, n.fx = gb.prototype.init, n.fx.step = {};
  var hb,
      ib,
      jb = /^(?:toggle|show|hide)$/,
      kb = /queueHooks$/;

  function lb() {
    return a.setTimeout(function () {
      hb = void 0;
    }), hb = n.now();
  }

  function mb(a, b) {
    var c,
        d = {
      height: a
    },
        e = 0;

    for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = V[e], d["margin" + c] = d["padding" + c] = a;
    }

    return b && (d.opacity = d.width = a), d;
  }

  function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function ob(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m = this,
        o = {},
        p = a.style,
        q = a.nodeType && W(a),
        r = n._data(a, "fxshow");

    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));

    for (d in b) {
      if (e = b[d], jb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }

        o[d] = r && r[d] || n.style(a, d);
      } else j = void 0;
    }

    if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
        n(a).hide();
      }), m.done(function () {
        var b;

        n._removeData(a, "fxshow");

        for (b in o) {
          n.style(a, b, o[b]);
        }
      });

      for (d in o) {
        g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }

  function pb(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function qb(a, b, c) {
    var d,
        e,
        f = 0,
        g = qb.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {},
        easing: n.easing._default
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: hb || lb(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }

        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for (pb(k, j.opts.specialEasing); g > f; f++) {
      if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }

    return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  n.Animation = n.extend(qb, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return X(c.elem, a, U.exec(b), c), c;
      }]
    },
    tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);

      for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b);
      }
    },
    prefilters: [ob],
    prefilter: function prefilter(a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == _typeof(a) ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(W).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = qb(this, n.extend({}, a), f);
        (e || n._data(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);

        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && kb.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        !b && c || n.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];

    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: mb("show"),
    slideUp: mb("hide"),
    slideToggle: mb("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = n.timers,
        c = 0;

    for (hb = n.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }

    b.length || n.fx.stop(), hb = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(ib), ib = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);

      d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
    c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
  }();
  var rb = /\r/g,
      sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) {
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }

          return c || (a.selectedIndex = -1), e;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var tb,
      ub,
      vb = n.expr.attrHandle,
      wb = /^(?:checked|selected)$/i,
      xb = l.getSetAttribute,
      yb = l.input;
  n.fn.extend({
    attr: function attr(a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d);
      }
    }
  }), ub = {
    set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = vb[b] || n.find.attr;
    yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
      var e, f;
      return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e;
    } : vb[b] = function (a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), yb && xb || (n.attrHooks.value = {
    set: function set(a, b, c) {
      return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c);
    }
  }), xb || (tb = {
    set: function set(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    }
  }, vb.id = vb.name = vb.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, n.valHooks.button = {
    get: function get(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0;
    },
    set: tb.set
  }, n.attrHooks.contenteditable = {
    set: function set(a, b, c) {
      tb.set(a, "" === b ? !1 : b, c);
    }
  }, n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = {
      set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      }
    };
  })), l.style || (n.attrHooks.style = {
    get: function get(a) {
      return a.style.cssText || void 0;
    },
    set: function set(a, b) {
      return a.style.cssText = b + "";
    }
  });
  var zb = /^(?:input|select|textarea|button|object)$/i,
      Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function prop(a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return a = n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    }
  }), n.extend({
    prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = {
      get: function get(a) {
        return a.getAttribute(b, 4);
      }
    };
  }), l.optSelected || (n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    },
    set: function set(a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;

  function Cb(a) {
    return n.attr(a, "class") || "";
  }

  n.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Cb(this)));
      });

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) {
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;

            while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }

            h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Cb(this)));
      });
      if (!arguments.length) return this.attr("class", "");

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) {
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;

            while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }

            h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Cb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;

        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;
      b = " " + a + " ";

      while (c = this[d++]) {
        if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      }

      return !1;
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  });
  var Db = a.location,
      Eb = n.now(),
      Fb = /\?/,
      Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
        d = null,
        e = n.trim(b + "");
    return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
  }, n.parseXML = function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;

    try {
      a.DOMParser ? (d = new a.DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }

    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };
  var Hb = /#.*$/,
      Ib = /([?&])_=[^&]*/,
      Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Lb = /^(?:GET|HEAD)$/,
      Mb = /^\/\//,
      Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ob = {},
      Pb = {},
      Qb = "*/".concat("*"),
      Rb = Db.href,
      Sb = Nb.exec(Rb.toLowerCase()) || [];

  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function Ub(a, b, c, d) {
    var e = {},
        f = a === Pb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function Vb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }

    return c && n.extend(!0, a, c), a;
  }

  function Wb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }

        d || (d = g);
      }

      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function Xb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function ajax(b, c) {
      "object" == _typeof(b) && (c = b, b = void 0), c = c || {};
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = n.ajaxSetup({}, c),
          m = l.context || l,
          o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
          p = n.Deferred(),
          q = n.Callbacks("once memory"),
          r = l.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === u) {
            if (!k) {
              k = {};

              while (b = Jb.exec(g)) {
                k[b[1].toLowerCase()] = b[2];
              }
            }

            b = k[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === u ? g : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return u || (a = t[c] = t[c] || a, s[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return u || (l.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (2 > u) for (b in a) {
            r[b] = [r[b], a[b]];
          } else w.always(a[w.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || v;
          return j && j.abort(b), y(0, b), this;
        }
      };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
      i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);

      for (e in l.headers) {
        w.setRequestHeader(e, l.headers[e]);
      }

      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
      v = "abort";

      for (e in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        w[e](l[e]);
      }

      if (j = Ub(Pb, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout");
        }, l.timeout));

        try {
          u = 1, j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");

      function y(b, c, d, e) {
        var k,
            s,
            t,
            v,
            x,
            y = c;
        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
      }

      return w;
    },
    getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, n.fn.extend({
    wrapAll: function wrapAll(a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      });

      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;

          while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }

          return a;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  });

  function Yb(a) {
    return a.style && a.style.display || n.css(a, "display");
  }

  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;

    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }

    return !1;
  }

  n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };
  var $b = /%20/g,
      _b = /\[\]$/,
      ac = /\r?\n/g,
      bc = /^(?:submit|button|image|reset|file)$/i,
      cc = /^(?:input|select|textarea|keygen)/i;

  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == _typeof(e) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      dc(a + "[" + e + "]", b[e], c, d);
    }
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      dc(c, a[c], b, e);
    }
    return d.join("&").replace($b, "+");
  }, n.fn.extend({
    serialize: function serialize() {
      return n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(ac, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(ac, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
  } : hc;
  var ec = 0,
      fc = {},
      gc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in fc) {
      fc[a](void 0, !0);
    }
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var _c;

      return {
        send: function send(d, e) {
          var f,
              g = b.xhr(),
              h = ++ec;
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) {
            g[f] = b.xhrFields[f];
          }
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");

          for (f in d) {
            void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          }

          g.send(b.hasContent && b.data || null), _c = function c(a, d) {
            var f, i, j;
            if (_c && (d || 4 === g.readyState)) if (delete fc[h], _c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();else {
              j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);

              try {
                i = g.statusText;
              } catch (k) {
                i = "";
              }

              f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
            }
            j && e(f, i, j, g.getAllResponseHeaders());
          }, b.async ? 4 === g.readyState ? a.setTimeout(_c) : g.onreadystatechange = fc[h] = _c : _c();
        },
        abort: function abort() {
          _c && _c(void 0, !0);
        }
      };
    }
  });

  function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }

  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }

  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = d.head || n("head")[0] || d.documentElement;
      return {
        send: function send(e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        },
        abort: function abort() {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var jc = [],
      kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
        f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };
  var lc = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };

  function mc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }

  n.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = {
        top: 0,
        left: 0
      },
          e = this[0],
          f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d;
    },
    position: function position() {
      if (this[0]) {
        var a,
            b,
            c = {
          top: 0,
          left: 0
        },
            d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;

        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }

        return a || Qa;
      });
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);

    n.fn[a] = function (d) {
      return Y(this, function (a, d, e) {
        var f = mc(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Y(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });
  var nc = a.jQuery,
      oc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
  }, b || (a.jQuery = a.$ = n), n;
});
