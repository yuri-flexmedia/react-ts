export function formatCpf(data: string) {
    const cleanedValue = data.replace(/\D/g, ''); // remove caracteres não numéricos
      // CPF
      return cleanedValue
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

export function formatCnpj(data: string) {
    const cleanedValue = data.replace(/\D/g, '');
          // CNPJ
          return cleanedValue
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d)/, '$1-$2');
}