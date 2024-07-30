import { Col, Form, Input, notification, Radio, Row } from "antd";
import axios from "axios";
import { type Dispatch, type SetStateAction } from "react";
import * as fbq from "../lib/fpixel";
import PhoneInput from "antd-phone-input";
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    // number: "${label} is not a valid number!",
  },
  //   number: {
  //     range: "${label} must be between ${min} and ${max}",
  //   },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validator = (_: any, { valid }: { valid: (x: any) => boolean }) => {
  if (valid(true)) return Promise.resolve(); // strict validation
  // if (valid()) return Promise.resolve(); // non-strict validation
  return Promise.reject("Invalid phone number");
};

const ApplyForm = ({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const openNotification = () => {
    api.open({
      message: "Your request has been submitted!",
      description:
        "We will get back to you as soon as possible. Thank you for your interest!",
      showProgress: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="">
      {contextHolder}
      <h2 className="cp-title cp_responsive text-center">Apply For Access</h2>

      <div
        className="cp-short-desc-container cp-clear  
									"
      >
        <div className="cp-short-description cp_responsive cp-clear mb-6 text-center">
          Submit the form below to contact us
        </div>
      </div>
      <Form
        autoComplete="on"
        form={form}
        layout="vertical"
        className="w-full "
        method="POST"
        // labelCol={{ span: 7 }}
        // wrapperCol={{ span: 14 }}
        // layout="horizontal"
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        onFinish={async (values) => {
          fbq.submitButton();
          try {
            // console.log(response);

            openNotification();
            setIsModalOpen(false);
            form.resetFields();
            await axios.post("/api", values);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input
            className="max-h-10 px-2"
            placeholder="Full Name"
            aria-label="name"
            autoComplete="true"
            name="name"
          />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input
            className="max-h-10 px-2"
            placeholder="Email Address"
            aria-label="email"
            autoComplete="true"
            name="email"
          />
        </Form.Item>
        {/* <Form.Item
          name={["user", "phone"]}
          label="Phone number"
          rules={[{ required: true }]}
        >
          <Input
            className="max-h-10 px-2"
            placeholder="+1 (202) 555-0125"
            aria-label="phone"
            autoComplete="true"
            name="phone"
          />
        </Form.Item> */}
        <Form.Item
          name={["user", "phone"]}
          label="Phone number"
          rules={[{ validator, required: true }]}
        >
          <PhoneInput enableSearch enableArrow />
        </Form.Item>
        {/* <div
          className="gfield_label gform-field-label border-b-0 text-center text-xl text-neutral-700
        "
        >
          How much would you like to invest?
          <span className="gfield_required">
            <span className="gfield_required gfield_required_text">
              (Required)
            </span>
          </span>
        </div>
        <div
          className="gfield_description text-center"
          id="gfield_description_24_13"
        >
          (In a perfect world)
        </div> */}
        {/* <Form.Item
          name="range"
          rules={[{ required: true }]}
          className="mx-auto "
        >
          <Radio.Group className="w-full">
            <Row>
              <Col span={12}>
                <Radio value="10"> Less than $10K </Radio>
              </Col>
              <Col span={12}>
                <Radio value="1025"> $10K to $25K </Radio>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Radio value="2550">$25K to $50K </Radio>
              </Col>
              <Col span={12}>
                <Radio value="50100"> $50K to $100K </Radio>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Radio value="100500">$100K to $500K </Radio>
              </Col>
              <Col span={12}>
                <Radio value="5001000"> $500K to $1M </Radio>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Radio value="1000"> $1M+ </Radio>
              </Col>
            </Row>
         
          </Radio.Group>
        </Form.Item> */}
        <Form.Item>
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper mx-auto w-fit">
              <button
                className="rounded-none bg-green-500 px-4 py-3"
                type="submit"
              >
                <span className="elementor-button-content-wrapper text-2xl">
                  <span className="elementor-button-icon elementor-align-icon-left text-white">
                    <i aria-hidden="true" className="mdi mdi-check" />{" "}
                  </span>
                  <span className="elementor-button-text pl-3 text-white">
                    CLICK TO APPLY
                  </span>
                </span>
              </button>
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ApplyForm;
