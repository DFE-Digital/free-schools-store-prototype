const { DateTime } = require('luxon');

const displayDate = (dateString) =>
{
    if (!dateString || dateString === "")
    {
        return "<span class='empty'>Empty</span>";
    }

    const date = DateTime.fromFormat(dateString,"yyyyMMdd");

    return date.toLocaleString(DateTime.DATE_FULL);
};

const displayText = value =>
{
    if (!value || value === "")
    {
        return "<span class='empty'>Empty</span>";
    }

    return value;
};

module.exports = {displayDate, displayText};
