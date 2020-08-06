import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { SkeletonTable } from "../../components/widgets/SkeletonWidget";
import { withApollo } from "../../apollo/client";
import usePagination from "../../hooks/usePagination";
import user from "../../apollo/queries/user";
import DashboardLayout from "../../components/layout/Dashboard";

const index = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(-1);
  const [currentItem, setCurrentItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dataFilter, setDataFilter] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const { data, loading, currentPage, changeCurrentPage } = usePagination(
  //   user.USERS_QUERY,
  //   dataFilter
  // );
  const data = null;
  const loading = true;
  const items = data && data.products.length > 0 ? data.products : [];
  const total = (data && data.productCount) || 0;

  function handleChangeFilter(event) {
    const { value } = event.target;
    setDataFilter(value);
  }

  return (
    <>
      <DashboardLayout metadata={{ title: "Compa&ntilde;&iacute;as" }}>
        <h2 className="pt-5">Unidad</h2>
        {loading ? (
          <SkeletonTable />
        ) : (
          <>
            <div className="d-flex justify-content-between pb-2 pt-4">
              <input
                type="text"
                className="filter px-2"
                value={dataFilter}
                onChange={(e) => handleChangeFilter(e)}
                placeholder="filter"
              />
              <Button
                className="btn-created"
                onClick={() => router.push("/unidad/create")}
              >
                <FaPlus />
              </Button>
            </div>
            {items.length > 0 ? (
              <>
                <Table striped bordered hover>
                  <thead className="table-head">
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Code</th>
                      <th>Descripci&oacute;n</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => {
                      return (
                        <tr key={item.id}>
                          <td>{i + 1}</td>
                          <td>{item.codigo}</td>
                          <td>{item.nombre}</td>
                          <td>{`${item.description.substr(0, 50)}...`}</td>
                          <td className="row-table-actions text-center">
                            <ButtonGroup aria-label="Basic example">
                              <Button
                                className="btn-view"
                                onClick={() =>
                                  router.push(`/unidad/view/${item.id}`)
                                }
                              >
                                View
                              </Button>
                              <Button
                                className="btn-edit"
                                onClick={(e) =>
                                  router.push(`/unidad/edit/${item.id}`)
                                }
                              >
                                Edit
                              </Button>
                              <Button
                                className="btn-delete"
                                onClick={(e) => {
                                  setCurrent(item.id);
                                  toggle();
                                }}
                              >
                                Delete
                              </Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  {total > 0 && currentPage > 0 && (
                    <PaginatorWidget
                      total={total}
                      current={currentPage}
                      onPageChanged={changeCurrentPage}
                    />
                  )}
                </Table>
              </>
            ) : (
              <span>No items found</span>
            )}
          </>
        )}
      </DashboardLayout>
      {/* <ProductManagementDelete
        isOpen={isOpen}
        toggle={toggle}
        id={currentItem}
      /> */}
    </>
  );
};

export default withApollo(index);
