const EvaluateReport = (responses) => {
    let v_count = 0, p_count = 0, k_count = 0;

    responses.forEach(response => {
        switch (response.selected) {
            case "v":
                v_count++;
                break;
            case "p":
                p_count++;
                break;
            case "k":
                k_count++;
                break;
            default:
                console.error(`Invalid Selection: ${response.selected}`);
                break;
        }
    });

    const total = v_count + p_count + k_count || 1; // avoid division by zero
    const v_percent = (v_count / total) * 100;
    const p_percent = (p_count / total) * 100;
    const k_percent = (k_count / total) * 100;

    let prakriti = '';
    const max = Math.max(v_percent, p_percent, k_percent);

    if (v_percent === max) prakriti += prakriti ? '-VATA' : 'VATA';
    if (p_percent === max) prakriti += prakriti ? '-PITTA' : 'PITTA';
    if (k_percent === max) prakriti += prakriti ? '-KAPHA' : 'KAPHA';

    return prakriti;
};

export default EvaluateReport;

