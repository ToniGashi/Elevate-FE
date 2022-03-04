export default {
  isoName: 'en-US',
  nativeName: 'English (US)',
  label: {
    clear: 'Clear',
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    set: 'Set',
    select: 'Select',
    reset: 'Reset',
    remove: 'Remove',
    update: 'Update',
    create: 'Create',
    search: 'Search',
    filter: 'Filter',
    refresh: 'Refresh',
    formCard: {
      h3: 'Have a question',
      subtitle: "Don't hesitate to contact us"
    },
    headerCard: {
      h5: 'Fundraising for sustainable projects',
      h6: 'Building a better planet together',
      buttonLabel: 'View projects'
    },
    projectCard: {
      termLabel: 'Term',
      termMonths: 'months',
      buttonLabel: 'Donate to '
    },
    projectListCard: {
      location: 'Location',
      termLabel: 'Term',
      termMonths: 'months',
      target: 'Target'
    },
    contactForm: {
      buttonLabel: 'Send message',
      names: 'Your names',
      email: 'Email',
      message: 'Message'
    },
    footer: {
      copyright: 'All Rights Reserved',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use'
    },
    navLink: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact us',
      signUp: 'Sign up',
      profile: 'Profile'
    },
    signUpForm: {
      h5: 'Log in to',
      email: 'Email',
      password: 'Password',
      logInButton: 'Log in',
      signUpButton: 'Sign up',
      forgottenPassword: 'Forgot your password',
      confirmPassword: 'Re-enter password',
      registration: 'Registration',
      name: 'Name',
      lastName: 'Last name',
      backToLogIn: 'Return to the login page'
    },
    errorPage: {
      buttonLabel: 'Return to the home page'
    },
    homePage: {
      activeProjects: 'Active projects'
    },
    profile: {
      logOut: 'Log out'
    },
    marketplace: {
      availableProjects: 'Available projects'
    },
    loading: {
      sendMessage: 'Sending your message'
    }
  },
  error: {
    enterNames: 'Please, enter your names',
    enterMessage: 'The message must consist of at least 6 characters',
    enterFirstName: 'Please, enter your name',
    enterLastName: 'Please, enter your last name',
    invalidEmail: 'Please, enter a valid email',
    invalidPassword: 'The password must consist of at least 6 characters',
    invalidConfirmPassword: 'Passwords must match',
    wrongCredentials: 'Wrong credentials',
    error404: 'Page not found...'
  },
  date: {
    days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false,
    pluralDay: 'days'
  },
  table: {
    noData: 'No data available',
    noResults: 'No matching records found',
    loading: 'Loading...',
    selectedRecords: rows => (
      rows === 1
        ? '1 record selected.'
        : (rows === 0 ? 'No' : rows) + ' records selected.'
    ),
    recordsPerPage: 'Records per page:',
    allRows: 'All',
    pagination: (start, end, total) => start + '-' + end + ' of ' + total,
    columns: 'Columns'
  },
  editor: {
    url: 'URL',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    underline: 'Underline',
    unorderedList: 'Unordered List',
    orderedList: 'Ordered List',
    subscript: 'Subscript',
    superscript: 'Superscript',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'Toggle Fullscreen',
    quote: 'Quote',
    left: 'Left align',
    center: 'Center align',
    right: 'Right align',
    justify: 'Justify align',
    print: 'Print',
    outdent: 'Decrease indentation',
    indent: 'Increase indentation',
    removeFormat: 'Remove formatting',
    formatting: 'Formatting',
    fontSize: 'Font Size',
    align: 'Align',
    hr: 'Insert Horizontal Rule',
    undo: 'Undo',
    redo: 'Redo',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    paragraph: 'Paragraph',
    code: 'Code',
    size1: 'Very small',
    size2: 'A bit small',
    size3: 'Normal',
    size4: 'Medium-large',
    size5: 'Big',
    size6: 'Very big',
    size7: 'Maximum',
    defaultFont: 'Default Font',
    viewSource: 'View Source'
  },
  tree: {
    noNodes: 'No nodes available',
    noResults: 'No matching nodes found'
  }
}
