import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import {
  useCreateCompaniesMutation,
  useDeleteCompaniesMutation,
  useGetCompaniesQuery,
  useUpdateCompaniesMutation,
} from "../../redux/apis/apis";

const Companies = () => {
  const [filters, setFilters] = useState({
    sort: 1,
    sortBy: "_id",
    search: "",
    searchBy: "",
    page: 1,
    perPage: 5,
  });

  const { data: companies = {} } = useGetCompaniesQuery(filters);
  const { data = [], results } = companies;

  const [createCompanies] = useCreateCompaniesMutation();
  const [updateCompanies] = useUpdateCompaniesMutation();
  const [deleteCompanies] = useDeleteCompaniesMutation();

  const columnData = [
    {
      title: "ID",
      accessor: "_id",
      hide: true,
    },
    {
      title: "Account Name",
      accessor: "name",
    },
  ];
  const modalsName = {
    form: "Companies",
    extraModals: {},
  };
  const modalsTitle = {
    create: "Create Companies Record",
    update: "Update Companies Details!",
    delete: "Delete Companies",
    extraModalTitle: {},
  };
  return (
    <DataTable
      data={data}
      totalRecords={results}
      createRecords={createCompanies}
      updateRecords={updateCompanies}
      deleteRecords={deleteCompanies}
      columnData={columnData}
      filters={filters}
      setFilters={setFilters}
      isExtraOptions={false}
      modalsName={modalsName}
      modalsTitle={modalsTitle}
    />
  );
};

export default Companies;
